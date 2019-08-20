import React, { useState } from 'react'

import shortId from 'lib/utils/shortId'
import { StarRatingWrapper } from './StarRatingStyle'

interface Props {
  rating?: number
  fontSize?: string
  color?: string
  defaultColor?: string
  getRating?: (number) => number
}

const StarRating: React.FC<Props> = ({ rating: initialRating, fontSize, color, ...props }) => {
  const [rating, setRating] = useState<number>(initialRating)
  const [tempRating, setTempRating] = useState<number>(initialRating)

  const rate = (rating) =>  () => {
    setRating(rating)
    setTempRating(rating)
    props.getRating(rating)
  }

  const starOver = (newRating) => () => {
    setRating(newRating)
    setTempRating(rating)
  }

  const starOut = () => {
    setRating(tempRating)
  }
  
  let stars = []
    
  for(let i = 0; i < 5; i++) {
    let starClass = '';
    
    if (rating > i && rating !== 0) {
      starClass += ' is-selected';
    }

    stars.push(
      <StarRatingWrapper
        key={shortId(i)}
        fontSize={fontSize}
        color={color}
        defaultColor={props.defaultColor}
        className={starClass}
        onClick={rate(i + 1)}
        onMouseOver={starOver(i + 1)}
        onMouseOut={starOut}>
        ★
      </StarRatingWrapper>
    )
  }

  return <>{stars}</>
}

StarRating.defaultProps = {
  fontSize: '12px',
  rating: 0,
  getRating: (number) => number
}

export default StarRating