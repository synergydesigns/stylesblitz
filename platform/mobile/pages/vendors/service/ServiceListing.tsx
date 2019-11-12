import React from 'react';
import { WhiteSpace } from 'antd-mobile';

import shortId from 'lib/utils/shortId';
import SimpleList from 'shared/components/List/SimpleList';
import { H1, P } from 'shared/components/Text';
import { ServiceListingWrapper } from './ServiceListenStyle';
import { WithDistance } from 'platform/shared/components/List/SimpleList';

const services = Array(10).fill(1).map(() => ({
  title: 'Facials & Clean-ups',
  price: '8000',
  duration: 21,
  rating: '4.0',
  distance: '21',
}));


const ServiceListing: React.FC = () => (
  <ServiceListingWrapper>
    <H1 size="18px">Services</H1>
    <WhiteSpace size="lg" />
    <P size="14px" lineHeight="19px">10 Services found in All</P>    
    <WhiteSpace size="xl" />
    {
      services.map((item, index) => <WithDistance {...item} key={shortId(index)}/>)
    }
  </ServiceListingWrapper>
);

export default ServiceListing;
