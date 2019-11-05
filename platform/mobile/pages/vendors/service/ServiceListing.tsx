import React from 'react';
import { WhiteSpace } from 'antd-mobile';

import shortId from 'lib/utils/shortId';
import { ListItem } from 'shared/components/Service';
import { H1, P } from 'shared/components/Text';
import { ServiceListingWrapper } from './ServiceListenStyle';

const services = Array(10).fill(1).map(() => ({
  name: 'Facials & Clean-ups',
  price: 8000,
  duration: 21,
  rating: '4.0',
}));


const ServiceListing: React.FC = () => (
  <ServiceListingWrapper>
    <H1 size="18px">Services</H1>
    <WhiteSpace size="lg" />
    <P size="14px" lineHeight="19px">10 Services found in All</P>    
    <WhiteSpace size="xl" />
    {
        services.map((item, index) => <ListItem {...item} key={shortId(index)} />)
      }
  </ServiceListingWrapper>
);

export default ServiceListing;
