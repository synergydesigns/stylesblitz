import React from 'react';
import { Flex } from 'antd-mobile';

import Circle from 'shared/icons/Circle';
import { SimpleListItem, Star, PriceWithStar } from './ListStyle';

interface SimpleListProps {
  title: string
  onClick?: () => void
}

interface WithDistanceProps extends SimpleListProps {
  price: string
  distance: string
  vendor?: string
  time: string
  rating: number
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
  price, title, vendor, time, distance, rating,
}) => (
  <SimpleListItem
    arrow="empty"
    multipleLine
    onClick={() => {}}
    extra={(
      <PriceWithStar>
        { <p className="am-list-item-price">{price}</p> }
        <Star>
          {`✩ ${rating}`}
        </Star>
      </PriceWithStar>
    )}
  >
    <Flex>
      <Flex.Item>
        {title}
        { vendor && (
          <p className="am-list-item-vendor">
            By
            {' '}
            { vendor }
          </p>
        )}
        <Flex className="am-list-item-distance" justify="start" align="center">
          <p className="am-list-item-time">{ time }</p>
          <Circle />
          <p className="am-list-item-more">
            {distance}
            {' '}
            away
          </p>
        </Flex>
      </Flex.Item>
    </Flex>
  </SimpleListItem>
);

WithDistance.defaultProps = {
  vendor: '',
};

export default SimpleList;
