import React from 'react';
import { IntlProvider } from 'react-intl';
import { storiesOf } from '@storybook/react';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import StoryRouter from 'storybook-router';
import configureStore  from '../src/configureStore';
import ItemContainer from '../src/components/containers/item';
import i18n from '../src/i18n';

const initialState = {
  router: {
    location: {
      hash: "",
      key: "fhh75b",
      pathname: "/items",
      search: "?search=autos",
      state: undefined
    },
  },
  items: {
    "categories": ["Autos, Motos y Otros","Autos y Camionetas"],
    "item": {
        "id":"MLA683153202",
        "title":"Ford Ecosport 1.6l 4x2 Xl Plus Taraborelli Palermo Anticipo",
        "price":{ "currency":"ARS","amount":88250,"decimals":0},
        "picture":"http://mla-s1-p.mlstatic.com/636564-MLA25996738707_092017-I.jpg",
        "condition":"used",
        "free_shipping":false,
        "firstLoad": true
      },
      items: [],
  }
};
const store = configureStore(initialState, createHistory());

storiesOf('ItemContainer', module)
  .addDecorator(StoryRouter())
  .add('Default', () => (
    <Provider store={store}>
      <IntlProvider locale={i18n.locale} messages={i18n.translations}>
        <ItemContainer />
      </IntlProvider>
    </Provider>
  ));
