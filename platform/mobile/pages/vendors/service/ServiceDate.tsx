import * as React from 'react';
import Layout from '../../layout';
import enUS from 'antd-mobile/lib/calendar/locale/en_US';
import ServiceDetailsHeader from './ServiceDetailsHeader';
import { WhiteSpace, Flex, Calendar } from 'antd-mobile';
import { Calender, Plus, Booking } from 'shared/icons';
import { P } from 'shared/components/Text';
import { IconDiv, Div, Span, Services, Bookings} from './ServiceDetailsStyle';

let originbodyScrollY;
  if(typeof window !== "undefined"){
  originbodyScrollY = document.getElementsByTagName('body')[0].style.overflowY;
  }

const ServiceDate: React.FC<{ show?: boolean, startTime?:any  }> = ({ ...props })=> (
  <Layout
    showHeader={false}
    showFooter={false}
    showNav={false}
    title="Service Details"
  >
    <ServiceDetailsHeader />
    <Services>
    <Div margintop="40px" marginbuttom="53px"><P size="18px"><Span fontweight="500">Schedule an Appiontment</Span></P></Div>
      <Flex justify="between" onClick={() => {
            props.show=false
        }}>
      <IconDiv left="20px"><Calender /></IconDiv>
      <IconDiv><Span>CHOOSE A DATE</Span></IconDiv>
      <IconDiv right="20px"><Plus /></IconDiv>
    </Flex>
    <Calendar
    visible={props.show}
    onConfirm={ (startTime) =>{if(typeof window !== "undefined"){
          document.getElementsByTagName('body')[0].style.overflowY = originbodyScrollY;
          }
            props.show= false,
            props.startTime= startTime
            console.log(props.startTime)
          }}
    onCancel = {() => { if(typeof window !== "undefined"){
          document.getElementsByTagName('body')[0].style.overflowY = originbodyScrollY;
          }
            props.show= false,
            props.startTime= undefined}}
    locale={enUS}
    pickTime={true}
    />
    <Bookings>
    <Flex justify="between">
      <IconDiv left="20px"><Booking /></IconDiv>
      <Div margintop="40px" marginbuttom="50px"><P size="14px"><Span>I'M BOOKING FOR</Span></P></Div>
      <IconDiv right="20px"><Plus /></IconDiv>
    </Flex>
    </Bookings>
    </Services>
  </Layout>
);
ServiceDate.defaultProps = {
    show: true,
    startTime: undefined,
    };
export default ServiceDate;
