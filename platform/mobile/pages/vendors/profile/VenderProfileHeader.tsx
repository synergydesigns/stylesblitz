import React from 'react';
import { WhiteSpace, Flex } from 'antd-mobile';
import Link from 'next/link';

import { ProfileImage } from 'shared/components/Image';
import { Back, Like } from 'shared/icons';
import { P } from 'shared/components/Text';
import { VendProfileHeader, IconDiv, BorderDiv, Span} from './VendorStyles';

const VendorProfileHeader: React.FC<{ url?: string, alt?: string }> = ({ url }) => (
  <VendProfileHeader>
    <Flex>
      <Link href="/">
        <Flex.Item><IconDiv left="20px"><Back /></IconDiv></Flex.Item>
      </Link>
      <Flex.Item><IconDiv right="20px"><Like /></IconDiv></Flex.Item>
    </Flex>
    <Flex justify="center">
      <ProfileImage image={url} />
      <BorderDiv >
        <Flex>
          <P size="24px" lineHeight="33px" weight="600">Sara Noor Spa Services</P>
        </Flex>
        <P size="12px">12 Joy Cresent, Lekki Phase 1, Lekki, Lagos.</P>
        <WhiteSpace size="xs"/>
        <Flex>
        <P><Span> Rating 4.0</Span>  /256 Reviews</P>
        <WhiteSpace size="lg"/>
          </Flex>
      </BorderDiv>
    </Flex>
  </VendProfileHeader>
);

VendorProfileHeader.defaultProps = {
  url: 'https://res.cloudinary.com/djdqvlwbl/image/upload/v1571954738/Rectangle_xdw4ih.png',
  alt: 'profile Image',
};

export default VendorProfileHeader;
