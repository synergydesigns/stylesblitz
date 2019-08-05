import React from 'react'
import { Flex, WhiteSpace, WingBlank } from 'antd-mobile'
import Link from 'next/link';

import { ProfileImage } from 'shared/components/Image'
import { H1 } from 'shared/components/Text'
import StarRating from 'shared/components/StarRating'
import { Location, Arrow } from 'shared/icons'
import ProfileDropDown from './ProfileDropDown'
import { VendProfileHeader, TextWithIcon } from './Styles'

const VendorProfileHeader: React.FC = ({ url, alt }) => {
  return (
    <VendProfileHeader>
      <Link href="/">
        <Arrow className="profile-header__back" />
      </Link>
      <Flex justify="center" align="center">
        <ProfileImage image={url} alt={alt}/>
      </Flex>
      <WhiteSpace />
      <Flex justify="center">
        <H1 size="18px" showBackGround>Utopia Hair Studio</H1>
      </Flex>
      <WhiteSpace />
      <TextWithIcon>
        <Location />
        <p>198, Benson Street, Victoria Island, Lagos</p>
      </TextWithIcon>
      <WhiteSpace size="sm" />
      <Flex justify="center" align="center">
        <StarRating />
      </Flex>
      <WhiteSpace size="lg" />
      <ProfileDropDown />
    </VendProfileHeader>
  )
}

VendorProfileHeader.defaultProps = {
  url: 'https://picsum.photos/id/26/450/450',
  alt: 'profile Image'
}

export default VendorProfileHeader
