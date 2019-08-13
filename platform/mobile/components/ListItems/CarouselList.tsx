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
  items: Array<Slider>
  itemHeight: number
  itemWidth: number
  headerText: string
  itemsCount: number
  marginTop: number
  showBorder: boolean
}

const CarouselList: React.FC<Props> = ({ items, itemHeight, itemWidth, ...props }) => {
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
      <Style.CarouselListHeader marginTop={props.marginTop} >
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
          items.map(({ name, subHeader, image }, index) => (
            <Style.Item key={index}>
              <img  src={image} />
              <h1>{name}</h1>
              <h3>{subHeader}</h3>
            </Style.Item>
          ))
        }
      </Swiper>
      {props.showBorder && <hr />}
    </Style.CarouselListWrapper>
  )
}

export default CarouselList
