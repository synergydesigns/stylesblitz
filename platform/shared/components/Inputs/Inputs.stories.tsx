import React from 'react';
import { storiesOf } from '@storybook/react';

import BaseInput from './BaseInput';

storiesOf('Shared|Inputs/BaseButton', module)
  .add('profile default size', () => <BaseInput label="label" />);
