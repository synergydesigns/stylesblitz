import React from 'react';
import { List, Button, Flex } from 'antd-mobile';
import styled from 'styled-components';

import { color, font } from 'shared/global';
import Icon from '../../icons/DefaultAvatar';

const ListItem = styled(List.Item)`
  &
  .am-list-line 
  .am-list-content {
    color: ${color.black};
    font: 500 16px/22px ${font.primary};
    padding-top: 0px;
  }

  &.am-list-item .am-list-line-multiple {
    color: green;
    padding-top: 0px;
    padding-bottom: 0px;
  }

  &.am-list-item .am-list-line .am-list-extra {
    position: absolute;
    right: 10px;
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
`;

interface Props {
  title: string
  onClick?: () => void
}

const Star = styled.div`
  border: 1px solid ${color.lightBlue};
  border-radius: 3px;
  width: 35px; 
  height: 35px; 
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TopList: React.FC<Props> = ({ title, onClick }) => (
  <div>
    <ListItem
      arrow="empty"
      thumb={<Icon />}
      multipleLine
      onClick={onClick}
      extra={<Star> ✩ 4 </Star>}
    >
      <div className="am-list-content">
        { title }
        <Flex className="am-list-content--meta">
          <Button className="am-list-item-label" size="large">Hair Care</Button>
          <p className="am-list-item-more">+ 10 More</p>
        </Flex>
      </div>
    </ListItem>
  </div>
);

TopList.defaultProps = {
  onClick: () => {},
};

export default TopList;
