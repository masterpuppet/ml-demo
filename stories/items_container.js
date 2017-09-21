import React from 'react';
import { IntlProvider } from 'react-intl';
import { storiesOf } from '@storybook/react';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import StoryRouter from 'storybook-router';
import configureStore  from '../src/configureStore';
import ItemsContainer from '../src/components/containers/items';
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
    "items":[
      {
        "id":"MLA683153202",
        "title":"Ford Ecosport 1.6l 4x2 Xl Plus Taraborelli Palermo Anticipo",
        "price":{ "currency":"ARS","amount":88250,"decimals":0},
        "picture":"http://mla-s1-p.mlstatic.com/636564-MLA25996738707_092017-I.jpg",
        "condition":"used",
        "free_shipping":false
      },
      {
        "id":"MLA683013304",
        "title":"Peugeot 306 Xn 4 Ptas  / Impecable / Permuto / 140 Mil Km /",
        "price":{"currency":"ARS","amount":86000,"decimals":0},
        "picture":"http://mla-s2-p.mlstatic.com/682629-MLA25951823223_092017-I.jpg",
        "condition":"used","free_shipping":false
      },
      {
        "id":"MLA682991421",
        "title":"Mercedes Benz C280 V6 Elegance Anticipo Y Cuotas Descrip (e)",
        "price":{"currency":"ARS","amount":220000,"decimals":0},
        "picture":"http://mla-s1-p.mlstatic.com/936631-MLA25710568434_062017-I.jpg",
        "condition":"used","free_shipping":false
      },
      {
        "id":"MLA683123825",
        "title":"Clio Mío 1.2 Dynamique 2015 Taraborelli Palermo Con Anticipo",
        "price":{"currency":"ARS","amount":97250,"decimals":0},
        "picture":"http://mla-s1-p.mlstatic.com/905243-MLA25995768725_092017-I.jpg",
        "condition":"not_specified",
        "free_shipping":false
      }
    ]
  }
};
const store = configureStore(initialState, createHistory());

storiesOf('ItemsContainer', module)
  .addDecorator(StoryRouter())
  .add('Default', () => (
    <Provider store={store}>
      <IntlProvider locale={i18n.locale} messages={i18n.translations}>
        <ItemsContainer />
      </IntlProvider>
    </Provider>
  ));
