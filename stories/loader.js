import React from 'react';
import { IntlProvider } from 'react-intl';
import { setAddon, storiesOf } from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';
import i18n from '../src/i18n';

setAddon(JSXAddon);

import Loader from '../src/components/loader';

storiesOf('Loader', module)
  .addWithJSX('Default', () => (
    <IntlProvider locale={i18n.locale} messages={i18n.translations}>
      <Loader />
    </IntlProvider>
  ));
