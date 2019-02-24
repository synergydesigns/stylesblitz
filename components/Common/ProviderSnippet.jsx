import React from 'react'
import PropTypes from 'prop-types'
import { ProviderSnippetWrapper, ImageWrapper } from './Styles'

const ProviderSnippet = ({ image, location, provider, className }) => {
  return (
    <ProviderSnippetWrapper className={className}>
      <ImageWrapper
        image={image}
        width="70px"
        height="70px"
        borderRadius="100px" />
      <div>
        <h1>{provider}</h1>
        <h3>{location}</h3>
      </div>
    </ProviderSnippetWrapper>
  )
}

ProviderSnippet.propTypes = {
  provider: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  className: PropTypes.string
}

export default ProviderSnippet
