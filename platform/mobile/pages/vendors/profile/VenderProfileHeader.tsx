import React from 'react';
import { WhiteSpace, Flex } from 'antd-mobile';
import Link from 'next/link';

import { ProfileImage } from 'shared/components/Image';
import { Back, Like } from 'shared/icons';
import { P } from 'shared/components/Text';
import { VendProfileHeader, BackDiv, LikeDiv, BorderDiv } from './VendorStyles';

const VendorProfileHeader: React.FC<{ url?: string, alt?: string }> = ({ url }) => (
  <VendProfileHeader>
    <Flex>
      <Link href="/">
        <Flex.Item><BackDiv><Back /></BackDiv></Flex.Item>
      </Link>
      <Flex.Item><LikeDiv><Like /></LikeDiv></Flex.Item>
    </Flex>
    <Flex justify="center" align="center">
      <ProfileImage image={url} />
      <BorderDiv>
        <Flex justify="center">
          <P size="23px" lineHeight="33px" weight="bold">Sara Noor Spa Services</P>
        </Flex>
        <P size="10px">12 Joy Cresent, Lekki Phase 1, Lekki, Lagos.</P>
        <WhiteSpace size="sm" />
        <Flex justify="center" align="center">
          <P weight="normal"> Rating 4.0  /256 Reviews</P>
        </Flex>
        <WhiteSpace size="lg" />
      </BorderDiv>
    </Flex>
  </VendProfileHeader>
);

VendorProfileHeader.defaultProps = {
  url: 'https://res.cloudinary.com/djdqvlwbl/image/upload/v1571954738/Rectangle_xdw4ih.png',
  alt: 'profile Image',
};

export default VendorProfileHeader;
