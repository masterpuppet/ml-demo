import React from 'react';
import { FormattedMessage } from 'react-intl';

const Loader = () => (
  <section className="section has-text-centered">
    <a className="button is-warning is-loading">
      <FormattedMessage id="loading" />
    </a>
  </section>
);

export default Loader;
