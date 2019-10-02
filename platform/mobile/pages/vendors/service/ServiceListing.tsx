import React from 'react';
import { WhiteSpace } from 'antd-mobile';

import shortId from 'lib/utils/shortId';
import { ListItem } from 'shared/components/Service';
import { H1 } from 'shared/components/Text';
import { ServiceListingWrapper } from './ServiceListenStyle';
import CategoryCarousel from './Carousel/CarouselCategories';

const services = Array(10).fill(1).map(() => ({
  image: 'https://picsum.photos/id/237/200/300',
  name: 'Weavon Fixing',
  price: 12000,
  duration: 233,
}));

const categories = [
  {
    name: 'all',
  },
  {
    name: 'braiding',
  },
  {
    name: 'weavon',
  },
  {
    name: 'wigs',
  },
  {
    name: 'fixing',
  },
  {
    name: 'make up',
  },
  {
    name: 'barbing',
  },
];


const ServiceListing: React.FC = () => (
  <ServiceListingWrapper>
    <H1 size="18px">Services</H1>
    <WhiteSpace size="lg" />
    <CategoryCarousel categories={categories} />
    <WhiteSpace size="xl" />
    {
        services.map((item, index) => <ListItem {...item} key={shortId(index)} />)
      }
  </ServiceListingWrapper>
);

export default ServiceListing;
