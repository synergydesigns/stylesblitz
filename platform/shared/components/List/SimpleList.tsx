import React from 'react';
import { Flex } from 'antd-mobile';

import Circle from 'shared/icons/Circle';
import { SimpleListItem, Span, SimpleListItemContainer } from './ListStyle';

interface SimpleListProps {
  title: string
  onClick?: () => void
}

interface WithDistanceProps extends SimpleListProps {
  price: string
  distance: string
  vendor?: string
  time?: string
  rating: string
}

SimpleListItem.defaultProps = {
  onClick: () => {},
};

const SimpleList: React.FC<SimpleListProps> = ({ title }) => (
  <SimpleListItem
    arrow="horizontal"
    multipleLine
    onClick={() => {}}
  >
    {title}
  </SimpleListItem>
);

SimpleList.defaultProps = {
  onClick: () => {},
};

export const WithDistance: React.FC<WithDistanceProps> = ({
  price, title, distance, rating,
}) => (
  <SimpleListItemContainer>
  <SimpleListItem
    arrow="empty"
    multipleLine
    onClick={() => {}}
    extra={(
        <p className="am-list-item-price">${price}</p>
    )}
  >
    <Flex>
      <Flex.Item>
        <p className="am-list-item-title">{title}</p>
        <Flex className="am-list-item-distance" justify="start" align="center">
          <p className="am-list-item-more">
          <span className="weight">
            {distance}
            {' '}
            mins away
            <Span><Circle width='3.05' height='3' fill='#6C7480' /></Span>
            </span>
          { rating }
          {' '} 
          / 16 Reviews
          </p>
        </Flex>
      </Flex.Item>
    </Flex>
  </SimpleListItem>
  </SimpleListItemContainer>
);

WithDistance.defaultProps = {
  vendor: '',
};

export default SimpleList;
