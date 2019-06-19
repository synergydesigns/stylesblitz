import React from 'react'

import {
  HeaderWrapper,
  HeaderButton
} from './Style'
import Logo from '../../../shared/icons/Logo'

const Header = () => (
  <HeaderWrapper>
    <Logo />
    <HeaderButton>get started</HeaderButton>
  </HeaderWrapper>
)

export default Header
