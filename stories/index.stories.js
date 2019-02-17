import React from 'react'

import { storiesOf } from '@storybook/react'
import { Button } from '../components/Button'
import { ForgotPassword } from '../components/Modal'

storiesOf('Button')
  .add('Button with class', () =>
     <Button text='Reset' width='150px' height='40px' extraClassName='reset-button'/> )
  .add('Button with style', () =>
     <Button text='Reset' width='150px' height='40px' style={{ backgroundColor: 'grey' }}/> )

storiesOf('Modal')
  .add('Forgot password modal', () => <ForgotPassword /> )
