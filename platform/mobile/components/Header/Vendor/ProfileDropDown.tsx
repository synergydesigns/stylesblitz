import React, { useState } from 'react'
import { Flex, WhiteSpace, SegmentedControl, WingBlank } from 'antd-mobile'

import { Chevron } from 'shared/icons'
import { H3 } from 'shared/components/Text'
import {
  FullProfile,
  OpeningHoursContainer,
  OpeningContainer,
  ProfileInfo
} from './Styles'


const Opening: React.Fc = () => {
  return (
    <OpeningContainer>
      <WingBlank>
        <H3 size="10px">mon - fri</H3>
        <p>8:00 AM - 5:00 PM</p>
      </WingBlank>
    </OpeningContainer>
  )
}

const OpeningHours: React.FC = () => {
  return (
    <OpeningHoursContainer>
      <Opening days="mon - friday" time="8:00 AM - 5:00 PM" />
      <Opening days="saturday - sunday" time="8:00 AM - 5:00 PM" />
    </OpeningHoursContainer>
  )
}


const TextWithIcon: React.FC<{ text: string, angle: string}> = ({ text, angle, onClick }) => {
  return (
    <FullProfile onClick={onClick}>
      <p>{text}</p>
      <Chevron rotate={angle} />
    </FullProfile>
  )
}

const ProfileDropDown: React.FC = () => {
  const [showOpenings, setShowOpenings] = useState<{ initialState: boolean}>(false)

  const handleShowOpenings = () => setShowOpenings(!showOpenings)

  return (
    <>
      {
        (!showOpenings && <TextWithIcon onClick={handleShowOpenings} text="full profile" angle="down"/>)
      }
      {
        (showOpenings &&
          <ProfileInfo >
            <WhiteSpace size="md" />
            <Flex justify="center">
              <H3 size="12px">opening hours</H3>
            </Flex>
            <WhiteSpace size="md" />
            <OpeningHours />
            <WhiteSpace size="xl" />
            <TextWithIcon onClick={handleShowOpenings} text="close" angle="up" />
          </ProfileInfo>
        )
      }
    </>
  )
}

export default ProfileDropDown
