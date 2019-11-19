import React from 'react';
import { WhiteSpace, Flex } from 'antd-mobile';
import Link from 'next/link';

import { ProfileImage } from 'shared/components/Image';
import { Back, Like } from 'shared/icons';
import { P } from 'shared/components/Text';
import { ServiceDetailsHeader, IconDiv, Div, Paragraph, Span} from './ServiceDetailsStyle';

const ServiceDetailHeader: React.FC<{ url?: string, alt?: string }> = ({ url }) => (
  <ServiceDetailsHeader>
    <Flex>
      <Link href="/">
        <Flex.Item><IconDiv left="20px" position="absolute"><Back /></IconDiv></Flex.Item>
      </Link>
      <Flex.Item><IconDiv left="100px" position="absolute"><Span>Facials and Clean-ups </Span></IconDiv></Flex.Item>
      <Flex.Item><IconDiv right="20px" position="absolute"><Like /></IconDiv></Flex.Item>
    </Flex>
    <Flex justify="center">
      <ProfileImage height='235px' width='550px' image={url} />
      </Flex>
      <WhiteSpace size="md"/>
        <Flex>
          <Flex.Item>
             <Div left="23px" position="absolute"><P size="18px"><Span>Facials and Clean-ups</Span></P></Div>
          </Flex.Item>
          <Flex.Item>
              <Div right="22px" position="absolute"><P size="20px" font="Balthazar">/#8000</P></Div>
          </Flex.Item>
        </Flex>
        <WhiteSpace size="md"/>
        <Div position="absolute" left="23px"><P size="12px"><Span fontweight="500"> Rating 4.0</Span>  /256 Reviews</P></Div>
        <WhiteSpace size="xl"/>
        <Paragraph><P  size="18px">To help combat the signs of ageing, 
        this wonderful treatment uses microdermabrasion
        and micro-currents to firm, brighten, tone and drain,
        healing LED light therapy and a collagen-rich mask 
        deliveres hydration where the skinn needs it most</P>
        </Paragraph>
        <WhiteSpace size="lg"/>
  </ServiceDetailsHeader>
);

ServiceDetailHeader.defaultProps = {
  url: 'https://res.cloudinary.com/djdqvlwbl/image/upload/v1574088905/Rectangle_lptgdf.png',
  alt: 'profile Image',
};

export default ServiceDetailHeader;
