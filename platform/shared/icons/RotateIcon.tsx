import React from 'react';
import styled from 'styled-components';

export enum Rotate {
  RIGHT = 'right',
  LEFT = 'left',
  UP = 'up',
  DOWN = 'down',
}

export interface Props {
  rotate?: Rotate
  width?: string
  height?: string
  className?: string
  fill?: string
  // children?: React.ElementType
}

const getAngleDegree = (angle: string) => {
  switch (angle) {
    case Rotate.RIGHT:
      return '-90deg';
    case Rotate.LEFT:
      return '90deg';
    case Rotate.UP:
      return '180deg';
    case Rotate.DOWN:
      return '0deg';
    default:
      return '90deg';
  }
};

const ChevronWrapper = styled.span<Props>`
  position: relative;
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};

  
  svg {
    transform: rotate(${({ rotate }) => getAngleDegree(rotate)});
    position: absolute;
    top: 0;
    left: 0;
  }
`;

const Chevron: React.FC<Props> = ({ children, ...props }) => (
  <ChevronWrapper {...props}>
    {children}
  </ChevronWrapper>
);


Chevron.defaultProps = {
  rotate: Rotate.DOWN,
  width: '10',
  height: '6',
  className: '',
};

export default React.memo(Chevron);
