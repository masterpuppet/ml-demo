import React from 'react';
import { IntlProvider } from 'react-intl';
import { storiesOf } from '@storybook/react';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import configureStore  from '../src/configureStore';
import NoMatchContainer from '../src/components/containers/no-match';
import i18n from '../src/i18n';

const store = configureStore(undefined, createHistory());

storiesOf('NoMatchContainer', module)
  .add('Default', () => (
    <Provider store={store}>
      <IntlProvider locale={i18n.locale} messages={i18n.translations}>
        <NoMatchContainer />
      </IntlProvider>
    </Provider>
  ));
