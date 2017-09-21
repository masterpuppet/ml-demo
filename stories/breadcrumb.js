import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';

setAddon(JSXAddon);

import Breadcrumb from '../src/components/breadcrumb';

storiesOf('Breadcrumb', module)
  .addWithJSX('Default', () => (
    <Breadcrumb breadcrumbs={['Taxon I', 'Taxon II', 'Taxon III']} />
  ));
