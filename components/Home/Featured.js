import React from 'react'

import {
  FeatureWrapper,
  SectionHeader,
} from './Styles'
import Common from '../Common'

const Featured = () => {
  return (
    <FeatureWrapper>
      <SectionHeader>featured service</SectionHeader>
      <Common.FeaturedService className='feature-service' />
    </FeatureWrapper>
  )
}

export default Featured
