import React from 'react'

import HeroDot from '../../../shared/icons/HeroDot'
import { HeroContainer, HeroHeading, HeroSubHeader, HeroImage } from './Style'

const Hero = () => (
  <HeroContainer>
    <HeroDot />
    <HeroHeading> No hassle,</HeroHeading>
    <HeroHeading> Just Convenience!</HeroHeading>
    <HeroSubHeader>
      Find and book Fashion & Beauty services near you
    </HeroSubHeader>
    <HeroImage src="/static/images/mobile/hero/image.png" top="60px" />
    <HeroImage src="/static/images/mobile/hero/image2.png" top="130px" />
    <HeroImage src="/static/images/mobile/hero/image3.png" top="190px" />
    <HeroImage src="/static/images/mobile/hero/image4.png" top="194px" />
  </HeroContainer>
)

export default Hero
