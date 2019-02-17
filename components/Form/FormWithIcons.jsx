import React from 'react'
import PropTypes from 'prop-types'

import  { Form, Field } from 'react-final-form'

import { Button } from '../Button'
import Svg from '../Svg'

import { InputWrapperWithIcon, FormWrapper } from './Styles'
import { color } from '../global'


const FormWithIcons = ({ fields, onSubmit, initialValues }) => {
  const GenerateForm =  ({ handleSubmit }) => {
    return  (
      <FormWrapper>
        <form onSubmit={handleSubmit} >
          {
            fields.map(({ icon, value, placeholder, component, type = 'text'}) => (
              <InputWrapperWithIcon key={value}>
                <label htmlFor={value}> 
                  <Svg icon={icon} width="12" height="12" fill="#757575"/>
                </label>
                <Field
                  name={value}
                  component={component}
                  type={type}
                  placeholder={placeholder} />
              </InputWrapperWithIcon>
            ))
          }
          <Button 
            text='Reset' 
            width='150px' 
            height='40px'
            style={{ 
              marginTop: '20px',
              backgroundColor: color.secondary,
              boxShadow: 'none',
              border: 'none'
            }}
            extraClassName='reset-button'/>
        </form>
      </FormWrapper>
    )
  }
      
  return <Form
    onSubmit={onSubmit}
    initialValues={{initialValues}}
    render={GenerateForm} />
}

FormWithIcons.propTypes = {
  fields: PropTypes.arrayOf(PropTypes.object).isRequired,
  onSubmit: PropTypes.func.isRequired,
  initialValues: PropTypes.object,
  button: PropTypes.func
}

export default FormWithIcons
