import React from 'react'
import PropTypes from 'prop-types'

import './Button.scss'

const Button = (props) => {
  return (
    <button 
      className={props.extraClassName} 
      onClick={props.onHandleClick} style={{
      width: props.width,
      height: props.height,
      ...props.style
    }}>
      {props.text}
    </button>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  extraClassName: PropTypes.string,
  onHandleClick: PropTypes.func
}

export default Button
