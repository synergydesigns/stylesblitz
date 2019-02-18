import React from 'react'
import PropTypes from 'prop-types'

import { Checkbox } from '../Form'
import { Button } from '../Button'

import { 
  AuthFooterWrapper,
  LoginControl, 
  LoginControlForgotPassword,
  LoginControlButtons,
  Or
} from './Styles'
import { color } from '../global'

const Component = ({ heading, subHeading}) => {
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
          primary={false}
          background={color.secondary} />
        <Button 
          text='Create a Profile'
          primary={false}
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

// Component.propTypes = {
//   heading: PropTypes.string,
//   subHeading: PropTypes.string
// }

// Component.defaultProps = {
//   subHeading: 'We make it easier for everyone to look beautiful'
// }

export default Component
