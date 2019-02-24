import React from 'react'
import PropTypes from 'prop-types'

import { LogoWrapper } from './Styles';

const Logo = ({ color }) => {
  return (
    <LogoWrapper color={color}>
      <h1><span>style</span>blitz</h1>
    </LogoWrapper>
  )
}

Logo.propTypes = {
  color: PropTypes.string
}

Logo.defaultProps = {
  color: '#fff'
}

export default Logo