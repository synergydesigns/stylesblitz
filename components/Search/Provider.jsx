import React, { Component } from 'react'
import { Form, Field } from 'react-final-form'

import { Button } from '../Button'
import { 
  ProviderWrapper, 
  ProviderFormWrapper,
  placeholderColor,
  ProviderInputWrapper
} from './Styles'
import Svg from '../Svg'

class Provider extends Component {

  handleSubmit = () => {}

  render () {
    return (
      <ProviderWrapper>
        <Form
          onSubmit={this.handleSubmit}
          initialValues={{ service: '', location: '' }}
          render={({ handleSubmit }) => (
            <ProviderFormWrapper onSubmit={handleSubmit}>
              <ProviderInputWrapper>
                <p>Find services or saloon </p>
                <label>
                  <Svg icon="search" height="36" width="36"  fill={placeholderColor} />
                </label>
                <Field
                  name="service"
                  component="input"
                  type="input"
                  placeholder="make up" />      
              </ProviderInputWrapper>
              <ProviderInputWrapper>
                <p>Enter a location</p>
                <label>
                  <Svg icon="search" height="36" width="36"  fill={placeholderColor} />
                </label>
                <Field
                  name="location"
                  component="input"
                  type="input"
                  placeholder="Maryland" />  
              </ProviderInputWrapper>
              <Button
                width="200px"
                height="80px"
                text="Search"
                style={{ borderRadius: '100px', 	fontSize: '24px' }}
              />
            </ProviderFormWrapper>
          )}
        />
      </ProviderWrapper>
    )
  }
}

export default Provider
