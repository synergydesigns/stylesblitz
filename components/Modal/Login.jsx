import React, { Component } from 'react'

import Modal from './Modal'
import AuthHeader from './AuthHeader'
import AuthFooter from './AuthFooter'

import { LoginModalWrapper } from './Styles'
import { FormWithIcons } from '../Form'

console.log(AuthFooter)

class Login extends Component {
  initialValues = {
    username: '',
    password: ''
  }

  fields = [
    { icon: 'email', value: 'username', placeholder: 'username/email', component: 'input'},
    { icon: 'key', value: 'password', placeholder: 'password', component: 'input'},
  ]

  handleSubmit = () => {}

  render() {
    return (
      <Modal onHandleClick={this.props.onHandleClick}>
        <LoginModalWrapper>
          <AuthHeader />
          <FormWithIcons
            fields={this.fields}
            onSubmit={this.handleSubmit}
            initialValues={this.initialValues}
            Footer={AuthFooter} />
        </LoginModalWrapper>
      </Modal>
    )
  }
}

export default Login
