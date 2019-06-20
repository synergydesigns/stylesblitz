import * as React from 'react'
import dynamic from 'next/dynamic';

const Swiper = dynamic(
  () => import('react-id-swiper'),
  {
    ssr: false
  }
);

import * as Style from './Style'

type Slider = {
  name?: string
  subHeader?: string
  image?: string
}

type Props = {
  items?: Array<Slider>
  itemHeight?: number
  itemWidth?: number
  headerText?: string,
  itemsCount?: number
}

const CarouselList: React.SFC<Props> = ({ items, itemHeight, itemWidth, ...props }) => {
  const params = {
    slidesPerView: 2,
    spaceBetween: 10,
    width: itemWidth,
    height: itemHeight,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    }
  };

  return (
    <Style.CarouselListWrapper height={itemHeight}>
      <Style.CarouselListHeader>
        <Style.CarouselListHeaderTitle>
          <h1>{props.headerText}</h1>
          <Style.CarouselListTooltip>
            {props.itemsCount}
            <div className='arrow-left' />
          </Style.CarouselListTooltip>
        </Style.CarouselListHeaderTitle>
        <h3>show more</h3>
      </Style.CarouselListHeader>
      <Swiper {...params}>
        { 
          items.map(({ name, subHeader, image }) => (
            <Style.Item>
              <img  src={image} />
              <h1>{name}</h1>
              <h3>{subHeader}</h3>
            </Style.Item>
          ))
        }
      </Swiper>
      <hr />
    </Style.CarouselListWrapper>
    
  )
}

CarouselList.defaultProps = {
  itemWidth: 270,
  itemHeight: 230,
  headerText: 'services',
  itemsCount: 108,
  items: [
    {
      name: 'nail polish',
      subHeader: '12 vendors',
      image: '/static/images/thumbnail/cream.jpg'
    },
    {
      name: 'facial treatment',
      subHeader: '12 vendors',
      image: '/static/images/thumbnail/cream.jpg'
    },
    {
      name: 'madonna spa',
      subHeader: '12 vendors',
      image: '/static/images/thumbnail/cream.jpg'
    },
    {
      name: 'massage',
      subHeader: '12 vendors',
      image: '/static/images/thumbnail/cream.jpg'
    },
    {
      name: 'hair grooming',
      subHeader: '12 vendors',
      image: '/static/images/thumbnail/cream.jpg'
    },
  ]
}

export default CarouselList
