import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from  'react-router-dom'

import Modal from './Index'
import Button from '../Button'
import '../../css/modals/Login.scss'

class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      password: ''
    }

    this.onHandleChange = this.onHandleChange.bind(this)
  }

  onHandleChange(e) {
    const value = e.target.value
    this.setState({
      [e.target.name]: value
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
          <input onChange={this.onHandleChange} type='text' name='username' className='username' value={this.state.username} placeholder='username/email' />
        </label>
        <label>
          <input onChange={this.onHandleChange} type='password' name='password' className='password' value={this.state.password} placeholder='password' />
        </label>
        <div className='forget-password'>
          <label>
            <input type='checkbox' className='remember-me' name='remember-me' value='' />Remember me
          </label>
          <Link to='#' onClick={this.props.onForgotPassword} className='forget-password-text'>Forgot Password?</Link>
        </div>
        <Button extraClassName='login-button' text='Login' /><Button extraClassName='create-profile-button' text='Create a Profile' onHandleClick={this.props.toggleLoginAndSignup} />
        <p style={{
          color: '#878787',
          fontFamily: 'Kollektif',
          fontSize: '12px'
        }}>OR</p>
        <Button text='Sign in with Facebook' width='350px' height='40px' />
      </form>
    </Modal>
  }
}

Login.propTypes = {
  onHandleClick: PropTypes.func,
  toggleLoginAndSignup: PropTypes.func,
  onForgotPassword: PropTypes.func
}

export default Login
