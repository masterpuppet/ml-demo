import React from 'react';
import { FormattedMessage } from 'react-intl';
import Layout from '../../layout';

const HomeContainer = () => (
  <Layout>
    <section className="section has-text-centered">
      <FormattedMessage id="home" >
        {(text) => (<h3 className="is-size-4">{text}</h3>)}
      </FormattedMessage>
    </section>
  </Layout>
);

export default HomeContainer;
