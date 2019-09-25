import React from 'react';

export const Button = props => {
  return (
  <button {...props.theme } onClick={props.handleClick}> 
    { props.icon && props.icon } { props.label } 
    </button>
    )
}
