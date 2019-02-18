import React from 'react'
import PropTypes from 'prop-types'

import { ButtonWrapper } from './Styles'

const Button = ({ handelClick, text, width, height, style, ...rest }) => {
  return (
    <ButtonWrapper
      text={text}
      width={width}
      height={height}
      onClick={handelClick}
      primary={rest.primary}
      color={rest.color}
      background={rest.background}
      boxShadow={rest.boxShadow}
      style={{...style}} >
      { text }
    </ButtonWrapper>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  handelClick: PropTypes.func,
  primary: PropTypes.bool,
  background: PropTypes.string,
  color: PropTypes.string,
  boxShadow: PropTypes.string
}

Button.defaultProps = {
  width: '150px' ,
  height: '40px',
  primary: true,
  color: '#fff',
  boxShadow: 'none'
}

export default Button
