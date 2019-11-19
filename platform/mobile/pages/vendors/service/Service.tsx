import React from 'react';
import { WhiteSpace, Flex } from 'antd-mobile';
import { Calender, Plus, Booking } from 'shared/icons';
import { P } from 'shared/components/Text';
import { IconDiv, Div, Span, Services, Bookings} from './ServiceDetailsStyle';

const Service: React.FC<{ url?: string, alt?: string }> = ({ url }) => (
  <Services>
      <Div margintop="40px" marginbuttom="53px"><P size="18px"><Span fontweight="500">Schedule an Appiontment</Span></P></Div>
      <Flex justify="between">
      <IconDiv left="20px"><Calender /></IconDiv>
      <IconDiv><Span>CHOOSE A DATE</Span></IconDiv>
      <IconDiv right="20px"><Plus /></IconDiv>
    </Flex>
    <WhiteSpace size="lg"/>
    <Bookings>
    <Flex justify="between">
      <IconDiv left="20px"><Booking /></IconDiv>
      <Div margintop="40px" marginbuttom="50px"><P size="14px"><Span>I'M BOOKING FOR</Span></P></Div>
      <IconDiv right="20px"><Plus /></IconDiv>
    </Flex>
    </Bookings>
  </Services>
);

export default Service;
