import styled from 'styled-components';
import { font, color } from 'shared/global';

export const ServiceListItemContainer = styled.div`
  width: 100%;
  height: 75px;
  position: relative;
  display: flex;
  align-items: center;
  padding-bottom: 15px;
  border-bottom: 1px solid #E5E5E5;
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0px;
  }
`;

export const ServiceListItemDetails = styled.div`
  margin-left: 10px;

  h1, p {
    margin: 0px;
  }

  .service-listitem__title {
    font: normal 16px/22px ${font.semiPrimary};
  }

  .service-listitem__time {
    font: normal 12px/16px ${font.primary};
    color: #999999;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    
    p {
      margin-left: 5px;
    }
  }

  .service-listitem__price {
    font: normal 12px/16px ${font.primary};
    color: ${color.primary};
  }

  .service-listitem__book {
    font: normal 14px/19px ${font.semiPrimary};
    background-color: ${color.primary};
    color: ${color.white};
    width: 80px;
    height: 30px;
    border: none;
    position: absolute;
    right: 0px;
    bottom: 15px;
    cursor: pointer;
  }
`;
