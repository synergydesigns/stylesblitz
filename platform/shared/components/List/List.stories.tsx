import React from 'react';
import { storiesOf } from '@storybook/react';

import TopList from './TopList';

storiesOf('Shared|List/TopList', module)
  .add('Top list item', () => <TopList title="Fringe Hair Design Studio" />);
