import React from 'react';
import ReactDOM from 'react-dom';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl';
import { renderRoutes } from 'react-router-config';
import registerServiceWorker from './registerServiceWorker';

import './index.css';
import routes from './routes';
import configureStore from './configureStore';
import i18n from './i18n';

const history = createHistory();
const preloadedState = window.__PRELOADED_STATE__;
const store = configureStore(preloadedState, history);

ReactDOM.render(
  <Provider store={store}>
    <IntlProvider locale={i18n.locale} messages={i18n.translations}>
      <ConnectedRouter history={history}>
        {renderRoutes(routes)}
      </ConnectedRouter>
    </IntlProvider>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
