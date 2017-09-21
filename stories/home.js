import React from 'react';
import { IntlProvider } from 'react-intl';
import { storiesOf } from '@storybook/react';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import StoryRouter from 'storybook-router';
import configureStore  from '../src/configureStore';
import HomeContainer from '../src/components/containers/home';
import i18n from '../src/i18n';

const store = configureStore(undefined, createHistory());

storiesOf('Home', module)
  .addDecorator(StoryRouter())
  .add('Default', () => (
    <Provider store={store}>
      <IntlProvider locale={i18n.locale} messages={i18n.translations}>
        <HomeContainer />
      </IntlProvider>
    </Provider>
  ));
