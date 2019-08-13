import React from 'react';

import RotateIcon, { Props } from './RotateIcon'

const Arrow: React.FC<Props> = (props) => (
  <RotateIcon {...props}>
    <svg width={props.width} height={props.height} viewBox="0 0 19 16" fill={props.fill} xmlns="http://www.w3.org/2000/svg">
      <path 
        d="M18.7071 8.70711C19.0976 8.31658 19.0976 7.68342 18.7071 7.29289L12.3431 0.928932C11.9526 0.538408 11.3195 0.538408 10.9289 0.928932C10.5384 1.31946 10.5384 1.95262 10.9289 2.34315L16.5858 8L10.9289 13.6569C10.5384 14.0474 10.5384 14.6805 10.9289 15.0711C11.3195 15.4616 11.9526 15.4616 12.3431 15.0711L18.7071 8.70711ZM0 9L18 9V7L0 7L0 9Z" 
        fill={props.fill}
      />
    </svg>
  </RotateIcon>
)

Arrow.defaultProps = {
  rotate: 'up',
  height: '16',
  width: '19',
  fill: '#E0115'
}

export default Arrow
