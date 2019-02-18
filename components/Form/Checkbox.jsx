import React from 'react'
import { Field } from 'react-final-form'

import { InputWrapper, CheckboxWrapper } from './Styles'

const Checkbox = ({ name, value, text = 'remember', id }) => {
  return (
    <CheckboxWrapper>
      <Field
        id={id}
        name={name}
        component="input"
        type="checkbox"
        value="true" />
      <label htmlFor={id}>
        { text && <span>{text}</span> }
      </label>
    </CheckboxWrapper>
  )
}

export default Checkbox
