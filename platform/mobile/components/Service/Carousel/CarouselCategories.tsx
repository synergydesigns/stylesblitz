import React from 'react'
import dynamic from 'next/dynamic';

const Swiper = dynamic(
  () => import('react-id-swiper'),
  {
    ssr: false
  }
);
import { font } from 'globals'
import shortId from 'lib/utils/shortId'
import getTextWidth from 'lib/utils/getTextWidth'
import ICategory from 'shared/interface/categories'
import { CategoryList } from '../ServiceListenStyle'


const CarouselCategories: React.FC<{ categories: ICategory.Categories }> = ({ categories }) => {
  const textWidths =  categories.map(({name}) => React.useMemo(() => getTextWidth(name), [name]));

  const params = {
    slidesPerView: 'auto',
    spaceBetween: 10,
    width: Math.max(...textWidths),
    height: 30,
  }

  return (
    <Swiper {...params}>
      { 
        categories.map(({ name }, index) => (
          <CategoryList key={shortId(index)}>
            <p>{name}</p>
          </CategoryList>
        ))
      }
    </Swiper>
  )
}

export default CarouselCategories