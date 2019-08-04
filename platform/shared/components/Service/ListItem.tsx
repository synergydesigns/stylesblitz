import React from 'react'
import { Flex } from 'antd-mobile'

import { Clock } from 'shared/icons'
import { Image } from '../Image'
import { H1 } from '../Text'
import { ServiceListItemContainer, ServiceListItemDetails } from './ServiceStyle'

interface Props {
  image: string
  name: string
  price: Int
  duration: Int
}

const ServiceListItem: React.FC<Props> = ({ image, name, price, duration }) => {
  return (
    <ServiceListItemContainer>
      <Image image={image} width="100px" height="60px" />
      <ServiceListItemDetails>
        <h1 className="service-listitem__title" size="14px">{ name }</h1>
        <div className="service-listitem__time">
          <Clock />
          <p>{duration} hrs</p>
        </div>
        <p className="service-listitem__price">₦ { price }</p>
        <button className="service-listitem__book">book</button>
      </ServiceListItemDetails>
    </ServiceListItemContainer>
  )
}

export default ServiceListItem