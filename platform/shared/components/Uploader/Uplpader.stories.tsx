import React from 'react'
import { storiesOf } from '@storybook/react'

import ImagePicker from './ImagePicker'

storiesOf('Shared|UpLoader/ImagePicker', module)
  .add('Image picker', () => 
    <ImagePicker />
  )