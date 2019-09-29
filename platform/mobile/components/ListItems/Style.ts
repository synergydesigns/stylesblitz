import styled from 'styled-components';
import { color, font } from '../../../shared/global';

export const CarouselListWrapper = styled.div<{ height: number }>`
  .swiper-slide {
    margin-right: 10px;
    height: ${({ height }) => `${height}px`};
  }

  hr {
    border: 1px solid ${color.secondary};
    width: 90%;
  }
`;
export const CarouselListHeader = styled.div<{ marginTop: number }>`
  text-transform: capitalize;
  display: flex;
  justify-content: space-between;
  margin: ${({ marginTop }) => `${marginTop}px 20px 25px 20px`};

  h1 {
    font: bold 18px/22px ${font.secondary};
  }
  h3 {
    font: bold 14px/18px ${font.secondary};
    color: ${color.primary}
  }
`;

export const CarouselListHeaderTitle = styled.div`
  display: flex;
`;

export const CarouselListTooltip = styled.div`
  width: 30px;
  height: 20px;
  border-radius: 3px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${color.primary};
  font: bold 14px/18px ${font.secondary};
  color: ${color.white};
  margin-left: 10px;

  .arrow-left {
    position: absolute;
    left: -5px;
    width: 0; 
    height: 0; 
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent; 
    border-right: 5px solid ${color.primary};
  }
`;

export const Item = styled.div`
  height: 490px;
  width: 100%;
  text-transform: capitalize;

  h1 {
    font: bold 16px/22px ${font.semiPrimary};
    margin-top: 12px;
  }

  h3 {
    font: normal 14px/19px ${font.primary};
     margin-top: 8px;
  }
`;

export const ItemImage = styled.div<{ src: string, width: number, height: number }>`
  position: absolute;
  height: ${({ height }) => `${height}px`};
  min-width: ${({ width }) => `${width}px`};
  width: ${({ width }) => `${width}px`};
  z-index: 3;
  right: 0;
  display: block;
`;
