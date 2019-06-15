import React from 'react'
import PropTypes from 'prop-types'
import  { Form, Field } from 'react-final-form'

import Svg from '../Svg'

import { InputWrapperWithIcon, FormWrapper } from './Styles'


const FormWithIcons = ({ fields, onSubmit, initialValues, Button, Header, Footer }) => {
  const GenerateForm =  ({ handleSubmit }) => {
    return  (
      <FormWrapper>
        <form onSubmit={handleSubmit} >
          {
            fields.map(({ icon, value, placeholder, component, options, type = 'text'}) => (
              <InputWrapperWithIcon key={value}>
                <label htmlFor={value}> 
                  <Svg icon={icon} width="12" height="12" fill="#757575"/>
                </label>
                {
                  options
                   ?  <Field
                        name={value}
                        component={component}
                        options={options} />
                  :  <Field
                        name={value}
                        component={component}
                        type={type}
                        placeholder={placeholder} />
                  }
              </InputWrapperWithIcon>
            ))
          }
          {Button && <Button />}
          {Footer && <Footer />}
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
  Button: PropTypes.func.isRequired
}

export default FormWithIcons
