import React from 'react';

import { FullStop } from 'shared/icons';
import { Image } from '../Image';
import { ServiceListItemContainer, ServiceListItemDetails, Span } from './ServiceStyle';

interface Props {
  name: string
  price: number
  duration: number
  rating: string
}

const ServiceListItem: React.FC<Props> = ({
  name, price, duration, rating
}) => (
  <ServiceListItemContainer>
    <ServiceListItemDetails>
      <h1 className="service-listitem__title">{ name }</h1>
        <p className="service-listitem__time">
        <span className="weight">
          {duration}
          {' '}
          mins away
          <Span><FullStop /></Span>
          </span>
          { rating }
          {' '} 
          / 16 Reviews
        </p>
      <p className="service-listitem__price">
        $
        { price }</p>
    </ServiceListItemDetails>
  </ServiceListItemContainer>
);

export default ServiceListItem;
