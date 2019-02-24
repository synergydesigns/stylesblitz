import React from 'react'
import propTypes from 'prop-types'

import { 
  PopularItemWrapper, 
  ImageWrapper,
} from './Styles'


export const PopularListItem = ({ name, image }) => {
  return(
    <PopularItemWrapper>
        <h1>{ name }</h1>
      <div>
      </div>
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