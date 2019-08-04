import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, boolean } from '@storybook/addon-knobs';

import ListItem from './ListItem'



storiesOf('Shared|Service/ListItem', module)
  .addDecorator(withKnobs)
  .add('service list', () => <ListItem 
    image="https://picsum.photos/id/237/200/300"
    name="Weavon Fixing"
    price={12000}
    duration={3}
  /> )
