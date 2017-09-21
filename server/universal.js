const path = require('path');
const fs = require('fs');

const React = require('react');
const { Provider } = require('react-redux');
const { renderToString } = require('react-dom/server');
const { StaticRouter } = require('react-router-dom');
const { matchRoutes, renderRoutes } = require('react-router-config');
const { IntlProvider } = require('react-intl');
const cache = require('./lib/cache');
const { default: Helmet } = require('react-helmet');

const { default: i18n } = require('../src/i18n');
const { default: routes } = require('../src/routes');
const { default: configureStore } = require('../src/configureStore');
const { default: App } = require('../src/App')

let html = null;
const read = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, htmlData) => {
      if (err) {
        return reject(err);
      }
      return resolve(htmlData);
    });
  });
}
const getFromCache = (filePath) => {
  return new Promise((resolve, reject) => {
    if(html === null) {
      return read(filePath)
        .then(htmlData => {
          html = htmlData;
          return resolve(html);
        })
        .catch(err => reject(err));
    }
  });
}
module.exports = function universalLoader(req, res) {
  const filePath = path.resolve(__dirname, '..', 'build', 'index.html');
  getFromCache(filePath)
    .then(html => {
      const store = configureStore();
      const branch = matchRoutes(routes, req.path);
      const promises = branch.map(({ route, match }) => {
        const { fetchData } = route.component;
        return fetchData instanceof Function ? fetchData(store, match.params, req.query) : Promise.resolve(null)
      });

      return Promise.all(promises).then((data) => {
        const context = {}
        const markup = renderToString(
          <Provider store={store}>
            <IntlProvider locale={i18n.locale} messages={i18n.translations}>
              <StaticRouter
                location={req.url}
                context={context}
              >
                {renderRoutes(routes)}
              </StaticRouter>
            </IntlProvider>
          </Provider>
        )

        if (context.url) {
          // Somewhere a `<Redirect>` was rendered
          res.redirect(301, context.url)
        } else {
          const helmet = Helmet.renderStatic();
          const metas = `${helmet.meta.toString()} ${helmet.link.toString()}`;
          const renderedApp = html
            .replace(/<title>(.*)<\/title>/, `${helmet.title.toString()}`)
            .replace(/<\/head>/, `${metas}</head>`)
            .replace('<html>', `<html ${helmet.htmlAttributes.toString()}>`)
            .replace('<body>', `<body ${helmet.bodyAttributes.toString()}>`)
            .replace('<div id="root"></div>', `<div id="root">${markup}</div>`);
          res.send(renderedApp);
        }
      });
    })
    .catch(err => {
      console.error('universalLoader error', err);
      return res.status(500).json({ err: err.message }).end();
    });
}
