import React, { Component } from 'react'

import Logo from './Logo'
import { HeaderWrapper, NavList } from './Styles'
import { Button } from '../Button'

class Header extends Component {

  render () {
    return (
      <HeaderWrapper>
        <Logo />
        <NavList>
          <li>become a blitz</li>
          <li>signing</li>
          <li><Button height="30px" width="80px" text="sign up" /></li>
        </NavList>
      </HeaderWrapper>
    )
  }
}

export default Header
