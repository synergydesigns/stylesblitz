import React from 'react'

import {
  JoinWrapper,
  SectionHeader,
} from './Styles'
import { ImageWrapper } from '../Common/Styles' 
import { Button } from '../Button'

const Featured = () => {
  return (
    <JoinWrapper>
      <div className="text-wrapper">
        <h1>Are you a <span className="blue">Professional</span> Stylist, Fashion Designer Or Makeup Artist?</h1>
        <p>
          Manage your business, accept payments and grow your clientele,
          interact with prospective clients, send out promotions by
          mail and sms with styleblitz all in one small business software.
        </p>
        <Button width="200px" height="60px" text="Set up Shop" />
      </div>
      <ImageWrapper
        image="./static/images/hair-stylist-png-hair-stylist-1366.png"
        width="354px"
        height="354px"
        style={{ position: 'absolute', right: 0, top: 0 }} />

    </JoinWrapper>
  )
}

export default Featured
