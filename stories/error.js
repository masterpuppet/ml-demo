import React from 'react';
import { storiesOf } from '@storybook/react';

import ErrorMessage from '../src/components/error-message';

storiesOf('ErrorMessage', module)
  .add('Default', () => (
    <ErrorMessage message="An error ocurred!" />
  ));
