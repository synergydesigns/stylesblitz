import React from 'react'
import { storiesOf } from '@storybook/react'

import { ProfileImage } from './index'

const images = [
  'https://picsum.photos/id/237/200/300',
  'https://picsum.photos/id/26/450/450'
]
 
storiesOf('Shared|Image/Profile image', module)
  .add('profile default size', () => <ProfileImage image={images[0] } />)
  .add('profile 200px', () => <ProfileImage image={images[0]} width="200px" height="200px" />)
