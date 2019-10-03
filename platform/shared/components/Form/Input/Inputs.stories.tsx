import React from 'react';
import { storiesOf } from '@storybook/react';

import AutoComplete from './AutoComplete';

storiesOf('Shared|Inputs/Autocomplete', module)
  .add('Autocomplete', () => (
    <AutoComplete data={[
      'Hair Braiding',
      'Brazilian Hair',
      'Hair Washing & Setting',
      'Peruvian Hair ',
    ]}
    />
  ));
