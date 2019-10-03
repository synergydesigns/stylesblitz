import React from 'react';
import { storiesOf } from '@storybook/react';

import TopList from './TopList';
import SimpleList, { WithDistance } from './SimpleList';

storiesOf('Shared|List/TopList', module)
  .add('Top list item', () => <TopList title="Fringe Hair Design Studio" />);

storiesOf('Shared|List/SimpleList', module)
  .add('Simple list item', () => <SimpleList title="Fringe Hair Design Studio" />)
  .add('Simple list item with distance', () => (
    <WithDistance
      title="Fringe Hair Design Studio"
      price="$8,000"
      distance="3.3km"
      time="44mins"
      rating="4"
    />
  ))
  .add('Simple list item with distance and vendor', () => (
    <WithDistance
      title="Facials & Clean-ups"
      vendor="Dollyhouse Empire"
      price="$5,000"
      distance="3.3km"
      time="44 mins"
      rating="4"
    />
  ));
