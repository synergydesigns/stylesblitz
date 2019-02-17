import React, { Component } from 'react'
import  { Form, Field } from 'react-final-form'

import Modal from './Modal'
import AuthHeader from './AuthHeader'

import { ForgotPasswordWrapper } from './Styles'
import { FormWithIcons } from '../Form'

class ForgotPassword extends Component {
  handleSubmit = async (values) => { console.log(values)}

  fields = [
    { icon: 'email', value: 'username', placeholder: 'username/email', component: 'input'},
  ]

  render() {
    
    return (
      <Modal onHandleClick={this.props.onHandleClick}>
        <ForgotPasswordWrapper>
          <AuthHeader />
          <FormWithIcons fields={this.fields} onSubmit={this.handleSubmit} initialValues={{username: ''}}/>
        </ForgotPasswordWrapper>
      </Modal>
    );
  }
}

export default ForgotPassword
