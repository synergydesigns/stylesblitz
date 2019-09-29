import React from 'react';

import { Clock } from 'shared/icons';
import { Image } from '../Image';
import { ServiceListItemContainer, ServiceListItemDetails } from './ServiceStyle';

interface Props {
  image: string
  name: string
  price: number
  duration: number
}

const ServiceListItem: React.FC<Props> = ({
  image, name, price, duration,
}) => (
  <ServiceListItemContainer>
    <Image image={image} width="100px" height="60px" />
    <ServiceListItemDetails>
      <h1 className="service-listitem__title">{ name }</h1>
      <div className="service-listitem__time">
        <Clock />
        <p>
          {duration}
          {' '}
          hrs
        </p>
      </div>
      <p className="service-listitem__price">
        ₦
        { price }
      </p>
      <button type="button" className="service-listitem__book">book</button>
    </ServiceListItemDetails>
  </ServiceListItemContainer>
);

export default ServiceListItem;
