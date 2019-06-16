import React, { Component } from 'react'

import Modal from './Modal'
import AuthHeader from './AuthHeader'
import AuthFooter from './AuthFooter'

import { LoginModalWrapper } from './Styles'
import { FormWithIcons, Select } from '../Form'


class Signup extends Component {
  initialValues = {
    name: '',
    username: '',
    gender: '',
    password: ''
  }

  genderOptions = [
    { value: 'female', label: 'Female' },
    { value: 'male', label: 'Male' }
  ]

  selectedGenderOption = ''

  fields = [
    { icon: 'person', value: 'name', placeholder: 'name', component: 'input'},
    { icon: 'email', value: 'username', placeholder: 'username/email', component: 'input'},
    { icon: 'gender', value: 'gender', placeholder: 'gender', component: Select.SelectAdapter, options: this.genderOptions },
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

export default Signup
