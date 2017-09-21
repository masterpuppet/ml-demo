import { addDecorator, configure } from '@storybook/react';
import { setIntlConfig, withIntl } from 'storybook-addon-intl';
import i18n from '../src/i18n';

const getMessages = (locale) => {
  return i18n.translations[locale]
}

setIntlConfig({
  locales: [i18n.locale],
  defaultLocale: i18n.locale,
  getMessages
});

addDecorator(withIntl);

// Run storybook
function loadStories() {
  require('../stories');
  // You can require as many stories as you need.
}

configure(loadStories, module);
