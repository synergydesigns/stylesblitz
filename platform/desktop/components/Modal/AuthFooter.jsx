import React from 'react'

import { Checkbox } from '../Form'
import { Button } from '../Button'

import {
  AuthFooterWrapper,
  LoginControl,
  LoginControlForgotPassword,
  LoginControlButtons,
  Or
} from './Styles'

const Component = () => {
  return (
    <AuthFooterWrapper>
      <LoginControl>
        <Checkbox
          name='remember'
          component='input'
          type='checkbox'
          text='Remember me'
          id="auth-footer-remember" />
        <LoginControlForgotPassword>
          <p>forgot password?</p>
        </LoginControlForgotPassword>
      </LoginControl>
      <LoginControlButtons>
        <Button
          text='Reset'
          primary={false} />
        <Button
          text='Create a Profile'
          primary={true}
          background='#fff'
          color='#4A4A4A'
          boxShadow='0 5px 14px 0 rgba(0,0,0,0.05)'/>
      </LoginControlButtons>
      <Or>or</Or>
      <Button
        text='Signin With Facebook'
        primary={true}
        width='100%' />
    </AuthFooterWrapper>
  )
}

export default Component
