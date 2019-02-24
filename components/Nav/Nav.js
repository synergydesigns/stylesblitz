import React from 'react'
import PropTypes from 'prop-types'

import Logo from './Logo'
import { NavWrapper, NavList } from './Styles'
import { Button } from '../Button'

const Nav = ({ color }) => {
  return (
    <NavWrapper>
      <Logo color={color} />
      <NavList color={color} >
        <li>become a blitz</li>
        <li>signing</li>
        <li><Button height="30px" width="80px" text="sign up" /></li>
      </NavList>
    </NavWrapper>
  )
}

Nav.propTypes = {
  color: PropTypes.string
}

Nav.defaultProps = {
  color: '#fff'
}

export default Nav
