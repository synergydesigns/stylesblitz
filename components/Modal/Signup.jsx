import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Select from 'react-select'

import Modal from './Index'
import Button from '../Button'

import 'Modals.scss'

class Signup extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      username: '',
      gender: '',
      password: '',
      genderOptions: [
        { value: 'female', label: 'Female' },
        { value: 'male', label: 'Male' }
      ],
      selectedGenderOption: ''
    }

    this.onHandleChange = this.onHandleChange.bind(this)
    this.onSelectGenderChange = this.onSelectGenderChange.bind(this)
  }

  onHandleChange(e) {
    const value = e.target.value
    this.setState({
      [e.target.name]: value
    })
  }

  onSelectGenderChange(selectedGenderOption) {
    this.setState({
      selectedGenderOption
    })
  }

  render() {
    return <Modal onHandleClick={this.props.onHandleClick}>
      <h4>Welcome to StyleBlitz</h4>
      <h6>
        We make it easier for everyone to look beautiful
      </h6>
      <form>
        <label>
          <input onChange={this.onHandleChange} type='text' name='name' className='name' value={this.state.name} placeholder='name' />
        </label>
        <label>
          <input onChange={this.onHandleChange} type='text' name='username' className='username' value={this.state.username} placeholder='username/email' />
        </label>
        <label>
          <Select
            className='react-select'
            options={this.state.genderOptions}
            selectedOption={this.state.selectedGenderOption}
            onChange={this.onSelectGenderChange}
            value={this.state.selectedGenderOption}
          />
        </label>
        <label>
          <input onChange={this.onHandleChange} type='password' name='password' className='password' value={this.state.password} placeholder='password' />
        </label>
        <div className='forget-password'>
          <label>
            <input type='checkbox' className='remember-me' name='remember-me' value='' />Remember me
          </label>
          <Link to='/' className='forget-password-text'>Forgot Password?</Link>
        </div>
        <Button extraClassName='login-button' text='Signup' /><Button extraClassName='create-profile-button' text='Login' onHandleClick={this.props.toggleLoginAndSignup} />
        <p style={{
          color: '#878787',
          fontFamily: 'Kollektif',
          fontSize: '12px'
        }}>OR</p>
        <Button text='Signup with Facebook' width='350px' height='40px' />
      </form>
    </Modal>
  }
}

Signup.propTypes = {
  onHandleClick: PropTypes.func,
  toggleLoginAndSignup: PropTypes.func
}

export default Signup
