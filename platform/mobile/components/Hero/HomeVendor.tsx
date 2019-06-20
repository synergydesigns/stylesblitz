import * as React from 'react'

import { HomeVendorButton, HomeVendorWrapper, HeroImage } from './Style'
import DynamicLines from '../../../shared/icons/DynamicLines'
import ArrowRight from '../../../shared/icons/ArrowRight'


const HomeVendor: React.SFC = () => {


  return (
    <HomeVendorWrapper>
      <DynamicLines />
      <h1>Looking to grow your customer base <br />and improve sales?</h1>
      <h3>We’ve got you</h3>
      <HomeVendorButton>
        <p>Try a Free Account</p>
        <ArrowRight />
      </HomeVendorButton>

      <HeroImage src="/static/images/mobile/hero/clipper.png" top="95px" />
      <HeroImage src="/static/images/mobile/hero/lipstick.png" top="150px" />
    </HomeVendorWrapper>
  )
}

export default HomeVendor