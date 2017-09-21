import React from 'react';
import { FormattedMessage } from 'react-intl';

const NoMatchContainer = () => (
  <div>
    <main>
      <section className="section">
        <div className="notification">
          <FormattedMessage id="not_found" />
        </div>
      </section>
    </main>
  </div>
);

export default NoMatchContainer;
