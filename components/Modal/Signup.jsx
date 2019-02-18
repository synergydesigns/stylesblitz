import React, { Component } from 'react'
import Select from 'react-select'

import Modal from './Modal'
import AuthHeader from './AuthHeader'
import AuthFooter from './AuthFooter'

import { LoginModalWrapper } from './Styles'
import { FormWithIcons } from '../Form'
import { font } from '../global'

const customStyles = {
  input: styles => ({ ...styles,  width: '292px', paddingLeft: '40px' }),
  placeholder: styles => ({ ...styles, color: '#878787', font: `300 12px/24px ${font.primary}` })
}

const ReactSelectAdapter = ({ input, ...rest }) => (
  <Select styles={customStyles} {...input} {...rest} searchable />
)

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
    { icon: 'gender', value: 'gender', placeholder: 'gender', component: ReactSelectAdapter, options: this.genderOptions },
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
