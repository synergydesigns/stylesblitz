import React, { useState } from 'react';
import dynamic from 'next/dynamic';

import shortId from 'lib/utils/shortId';
import { Arrow, Rotate } from 'shared/icons';
import { FullPageGalleryWrapper } from './GalleryStyle';

const Swiper = dynamic(() => import('react-id-swiper'), { ssr: false });

const assets = [
  'https://picsum.photos/id/237/200/300.jpg',
  'https://picsum.photos/id/26/450/450.jpg',
  'https://picsum.photos/id/26/200/450.jpg',
  'https://picsum.photos/id/36/450/450.jpg',
  'https://picsum.photos/id/26/300/450.jpg',
  'https://picsum.photos/id/76/450/450.jpg',
  'https://picsum.photos/id/26/450/250.jpg',
  'https://picsum.photos/id/896/450/450.jpg',
  'https://picsum.photos/id/26/450/450.jpg',
  'https://picsum.photos/id/26/450/450.jpg',
  'https://picsum.photos/id/26/300/450.jpg',
  'https://picsum.photos/id/275/450/550.jpg',
  'https://picsum.photos/id/900/450/280.jpg',
  'https://picsum.photos/id/930/450/280.jpg',
  'https://picsum.photos/id/940/450/280.jpg',
  'https://picsum.photos/id/60/450/280.jpg',
].map(url => ({ url }));

const renderFraction = (currentClass, totalClass) => (
  `<div class="image-count">
      <span class="${currentClass}"></span>
        of
      <span class="${totalClass}"></span>
    </div>`
);

const params = {
  sliderWidth: 360,
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
    renderFraction,
  },
  lazy: {
    loadPrevNext: true,
  },
};

const FullPageGallery: React.FC = () => {
  const [swiper, updateSwiper] = useState<any>(params);
  const [index, setIndex] = useState(0);

  const goNext = () => {
    if (swiper !== null) {
      setIndex(swiper.activeIndex);
      swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiper !== null) {
      setIndex(swiper.activeIndex);
      swiper.slidePrev();
    }
  };

  return (
    <FullPageGalleryWrapper>
      <div className="gallery-navigation__back">
        <Arrow fill="#ffffff" />
      </div>
      <Swiper {...params} getSwiper={updateSwiper}>
        {
          assets.map(({ url }, assetIndex) => (
            <div className="image-wrapper" key={shortId(assetIndex)}>
              <div className="swiper-zoom-container">
                <img alt={url} className="swiper-slide swiper-lazy image-wrapper__image" data-src={url} />
                <div className="swiper-lazy-preloader" />
              </div>
            </div>
          ))
        }
      </Swiper>
      <div className="gallery-navigation">
        <div role="presentation" onClick={goPrev} className="gallery-navigation__prev">
          <Arrow fill={index === 0 ? 'gray' : '#ffffff'} />
        </div>
        <div role="presentation" onClick={goNext} className="gallery-navigation__next">
          <Arrow fill={index === assets.length - 1 ? 'gray' : '#ffffff'} rotate={Rotate.DOWN} />
        </div>
      </div>
    </FullPageGalleryWrapper>
  );
};

export default FullPageGallery;
