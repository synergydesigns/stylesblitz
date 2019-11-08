import { List } from 'antd-mobile';
import styled from 'styled-components';

import { color, font } from 'shared/global';

const ListItem = styled(List.Item)`
  &
  .am-list-line 
  .am-list-content {
    color: ${color.black};
    font: 500 16px/22px ${font.primary};
    padding: 0px;
  }

  &.am-list-item {
    padding-left: 0;
  }

  &.am-list-item .am-list-line-multiple {
    padding: 5px 0;
  }

  &.am-list-item .am-list-line .am-list-extra {
    position: absolute;
    right: 0;
  }

  .am-list-item-label {
    margin: 0;
    color: #9A9EAD;
    font: normal 14px/19px ${font.primary};
  }

  .am-list-content-meta {
    display: flex;
    align-items:  center;
  }

  .am-list-item-label {
    width: 70px;
    height: 25px;
    background: #F8D3EB;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 3px;

    span {
      font: 500 12px/16px ${font.primary};
      color: #B01C7C;
    }
  }

  .am-list-item-more {
    margin: 0 0 0 10px;
    color: #9A9EAD;
    font: normal 14px/19px Avenir Next;
  }

  .am-list-thumb {
    height: 100%;
    display: flex;
  }
`;

export const Star = styled.div`
  border: 1px solid ${color.lightBlue};
  border-radius: 3px;
  width: 35px; 
  height: 35px; 
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${color.primary};
`;
export const SimpleListItemContainer = styled.div`
  width: 100%;
  height: 75px;
  position: relative;
  align-items: center;
  padding-bottom: 15px;
  border-bottom: 1px solid #E5E5E5;
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0px;
  }
`;

export const SimpleListItem = styled(ListItem)`
  p {
    margin: 0;
  }

  .am-list-item-distance {
    .am-list-item-time {
      height: 25px;
      background: ${color.lightBlueShadeOne};
      color: ${color.primary};
      font: 500 12px/16px ${font.primary};
      display: flex;
      justify-content: center;
      align-items: center;
      padding-left: 5px;
      padding-right: 5px;
      margin: 0;
    }

    svg {
      margin-left: 7px;
      margin-right: 7px;
    }

    .am-list-item-more {
      font: normal 12px/16px '#6C7480';
      margin-left: 0px;
    }
  }

  .am-list-item-vendor {
    font: 400 14px/19px ${font.primary};
    color: ${color.primary};
    margin: 5px 0;
  }

  .am-list-item-price {
    font: normal 20px/20px Balthazar;
    color: ${color.black};
    position: absolute:
    right: 22px;
  }
  
  .am-list-extra {
    height: 100%;
  }

  .am-list-arrow {
    padding-left: 15px;
  }
  
  .am-list-item-title {
    font: normal 14px/19px ${font.primary};    
    margin-bottom: 8px;
    font-weight: 600;
  }
  .weight{
    font-weight:500;
  }
`;

export const PriceWithStar = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-end;
`;
export const Span = styled.span`
  margin-left: 7px;
  margin-right: 7px;
  top: -1px;
  position: relative;
`;

export default ListItem;
