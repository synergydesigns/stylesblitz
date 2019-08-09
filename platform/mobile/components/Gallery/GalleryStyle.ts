import styled from 'styled-components'

export const VendorGalleryWrapper = styled.div`
  display: flex;
  justify-content: center;
`

export const FullPageGalleryWrapper = styled.div`
  display: flex;
  height: 100%;

  .gallery-navigation__back {
    position: absolute;
    top: 18px;
    left: 20px;
    z-index: 2;
  }

  .swiper-container,
  .swiper-wrapper {
    height: 100%;
    width: 100%;
  }

  .swiper-pagination-fraction {
    width: 100%;
    display: flex;
    height: 50px;
    top: 0;
    justify-content: center;
    align-items: center;
    background-color: #131313;
    color: #ffffff;
  }

  .image-wrapper {
    height: 100%;
    width: 100%;
    background-color: #000000;
  }

  .image-wrapper__image {
    width: auto;
    height: auto;
  }

  .gallery-navigation {
    width: 100%;
    height: 50px;
    position: fixed;
    bottom: 0;
    border: 0;
    background-color: #131313;
    z-index: 1;
    display: flex;
    justify-content: space-between;

    .gallery-navigation__prev,
    .gallery-navigation__next {
      width: 50%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`

