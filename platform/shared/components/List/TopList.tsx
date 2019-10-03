import React from 'react';
import { Button, Flex } from 'antd-mobile';

import Icon from '../../icons/DefaultAvatar';
import ListItem, { Star } from './ListStyle';

interface Props {
  title: string
  onClick?: () => void
}

const TopList: React.FC<Props> = ({ title, onClick }) => (
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
);

TopList.defaultProps = {
  onClick: () => {},
};

export default TopList;
