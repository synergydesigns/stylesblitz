import React, { Component } from 'react'

import Modal from './Modal'
import AuthHeader from './AuthHeader'
import { FormWithIcons } from '../Form'
import { Button } from '../Button'

import { ForgotPasswordWrapper } from './Styles'
import { color } from '../global'


class ForgotPassword extends Component {
  handleSubmit = async (values) => { console.log(values)}

  fields = [
    { icon: 'email', value: 'username', placeholder: 'username/email', component: 'input'},
  ]

  button = () => <Button 
    text='Reset' 
    width='150px' 
    height='40px'
    style={{ 
      marginTop: '20px',
      backgroundColor: color.secondary,
      boxShadow: 'none',
      border: 'none'
    }} />

  render() {
    return (
      <Modal onHandleClick={this.props.onHandleClick}>
        <ForgotPasswordWrapper>
          <AuthHeader />
          <FormWithIcons 
            fields={this.fields} 
            onSubmit={this.handleSubmit} 
            initialValues={{username: ''}}
            Button={this.button}
          />
        </ForgotPasswordWrapper>
      </Modal>
    );
  }
}

export default ForgotPassword
