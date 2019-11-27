import React from 'react';
import { storiesOf } from '@storybook/react';

import AutoComplete from './AutoComplete';

storiesOf('Shared|Inputs/Autocomplete', module)
  .add('Autocomplete', () => (
    <AutoComplete
      data={[
        {
          label: 'Hair Braiding',
          value: 'Hair Braiding',
        },
        {
          label: 'Brazilian Hair',
          value: 'Brazilian Hair',
        },
        {
          label: 'Hair Washing & Setting',
          value: 'Hair Washing & Setting',
        },
        {
          label: 'Hair Braiding',
          value: 'Peruvian Hair',
        },
      ]}
      placeholder="search"
    />
  ));
