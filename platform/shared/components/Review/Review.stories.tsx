import React from 'react'
import { storiesOf } from '@storybook/react'
import Reset from 'reset-styles'

import Review from './Review'

storiesOf('Shared|Review', module)
  .add('default', () => (
    <>
      <Reset />
      <Review />
    </>
  ))
