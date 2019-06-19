import React from 'react'
import PropTypes from 'prop-types'

import { AuthHeader } from './Styles'

const Component = ({ heading, subHeading }) => {
  return (
    <AuthHeader>
      {
        heading
          ? <h1>heading</h1>
          : <h1>Welcome to <span>StyleBlitz</span></h1>
      }
      <h3>{subHeading}</h3>
    </AuthHeader>
  )
}

Component.propTypes = {
  heading: PropTypes.string,
  subHeading: PropTypes.string
}

Component.defaultProps = {
  subHeading: 'We make it easier for everyone to look beautiful'
}

export default Component
