import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import Tabs from './Tab';


storiesOf('Mobile|Tabs', module)
  .addDecorator(withKnobs)
  .add('default', () => <Tabs />);
