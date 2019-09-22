import React, { useState } from 'react'
import Flex from 'antd-mobile/lib/flex'
import WhiteSpace from 'antd-mobile/lib/white-space'
import SegmentedControl from 'antd-mobile/lib/segmented-control'
import WingBlank from 'antd-mobile/lib/wing-blank'

import { Chevron, Rotate } from 'shared/icons'
import { H3 } from 'shared/components/Text'
import {
  FullProfile,
  OpeningHoursContainer,
  OpeningContainer,
  ProfileInfo
} from './VendorStyles'

interface IOpening {
  days: string
  time: string
}

const Opening: React.FC<IOpening> = () => {
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

interface ITextWithIcon {
  text: string
  angle: Rotate
  onClick: () => void
}

const TextWithIcon: React.FC<ITextWithIcon> = ({ text, angle, onClick }) => {
  return (
    <FullProfile onClick={onClick}>
      <p>{text}</p>
      <Chevron rotate={angle} />
    </FullProfile>
  )
}

const ProfileDropDown: React.FC = () => {
  const [showOpenings, setShowOpenings] = useState<boolean>(false)

  const handleShowOpenings = () => setShowOpenings(!showOpenings)

  return (
    <>
      {
        (!showOpenings && <TextWithIcon onClick={handleShowOpenings} text="full profile" angle={Rotate.DOWN}/>)
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
            <TextWithIcon onClick={handleShowOpenings} text="close" angle={Rotate.UP} />
          </ProfileInfo>
        )
      }
    </>
  )
}

export default ProfileDropDown
