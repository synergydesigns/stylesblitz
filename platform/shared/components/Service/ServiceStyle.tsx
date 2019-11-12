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

  .service-listitem__title {
    font: normal 14px/19px ${font.primary};
    font-weight: 600;
    margin-bottom: 8px;
  }

  .service-listitem__time {
    font: normal 12px/16px '#6C7480';
    padding-bottom: 10px;
  }

  .service-listitem__price {
    font: normal 20px/20px Balthazar;
    position: absolute;
    right: 22px;
    bottom: 45px;
  }
  .weight{
    font-weight:500;
  }
`;
export const Span = styled.span`
  margin-left: 8.13px;
  margin-right: 8.1px;
  top: -2px;
  position: relative;
`;
