import React from 'react';

import { color } from 'shared/global';

interface Props {
  width?: string,
  height?: string,
  fill?: string
}

const Circle: React.FC<Props> = ({ width, height, fill }) => (
  <svg width={width} height={height} viewBox={`0 0 ${height} ${height}`} fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="2.5" cy="2.5" r="2.5" fill={fill} />
  </svg>
);


Circle.defaultProps = {
  width: '5',
  height: '5',
  fill: color.primary,
};

export default React.memo(Circle);
