import React, { Component } from 'react'
import  { Form, Field } from 'react-final-form'

import Modal from './Modal'
import AuthHeader from './AuthHeader'
import { Button } from '../Button'
import Svg from '../Svg'
import { InputWrapperWithIcon, FormWrapper, ForgotPasswordWrapper } from './Styles'
import { color } from '../global'


class ForgotPassword extends Component {
  handleSubmit = async (values) => {}

  render() {
    return (
      <Modal onHandleClick={this.props.onHandleClick}>
        <ForgotPasswordWrapper>
          <AuthHeader />
          <Form
            onSubmit={this.handleSubmit}
            initialValues={{ username: '' }}
            render={ForgotPasswordForm}
          ></Form>
        </ForgotPasswordWrapper>
      </Modal>
    );
  }
}

const ForgotPasswordForm = ({ handleSubmit, form, submitting, pristine, values }) => {
  return (
    <FormWrapper>
      <form onSubmit={handleSubmit} >
        <InputWrapperWithIcon>
        <label htmlFor=""> 
          <Svg 
            icon="email" 
            width="12" 
            height="12" 
            fill="#757575"/>
          </label>
          <Field
            name="username"
            component="input"
            type="text"
            className='username' 
            placeholder="username/email" />
        </InputWrapperWithIcon>
        <Button 
          text='Reset' 
          width='150px' 
          height='40px'
          style={{ 
            marginTop: '20px',
            backgroundColor: color.secondary,
            boxShadow: 'none',
            border: 'none'
          }}
          extraClassName='reset-button'/>
      </form>
    </FormWrapper>
  )
}

export default ForgotPassword
