import React from 'react'
import propTypes from 'prop-types'

import { 
  PopularItemWrapper, 
  ImageWrapper,
  PopularItemHeader,
  PopularItemOverlay
} from './Styles'


export const PopularListItem = ({ name, image }) => {
  return(
    <PopularItemWrapper>
      <PopularItemHeader>
        <h1>{ name }</h1>
      </PopularItemHeader>
      <PopularItemOverlay />
      <ImageWrapper
        image={image}
        height="100%"
        width="100%"
      />
    </PopularItemWrapper>
  )
}

PopularListItem.propTypes = {
  name: propTypes.string.isRequired,
  image: propTypes.string.isRequired
}

export default PopularListItem