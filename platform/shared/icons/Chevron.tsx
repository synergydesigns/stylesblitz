import React from 'react'
import styled from 'styled-components'

enum Rotate {
  RIGHT = 'right',
  LEFT = 'left',
  UP = 'up',
  DOWN = 'down',
}

interface Props {
  rotate: Rotate
  width?: string
  height?: string
  t: string
}

const getAngleDegree = (angle: string) => {
  switch(angle) {
    case Rotate.RIGHT:
      return '-90deg'
    case Rotate.LEFT:
      return '90deg'
    case Rotate.UP:
      return '180deg'
    case Rotate.DOWN:
      return '0deg'
  }
}

const ChevronWrapper = styled.span<Props>`
  position: relative;
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};

  
  svg {
    transform: rotate(${({ rotate }) => getAngleDegree(rotate)});
    position: absolute;
  }
`

const Chevron: React.FC<Props> = (props) => (
  <ChevronWrapper {...props}>
    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M0.199535 1.06936L4.55061 5.05753C4.79538 5.28222 5.204 5.28222 5.44977 5.05753L9.79984 1.06936C10.0667 0.824772 10.0667 0.438649 9.79984 0.19406C9.51737 -0.0646825 9.04693 -0.0646825 8.76396 0.19406L5.12006 3.53427C5.05422 3.59486 4.94515 3.59486 4.87931 3.53427L1.23541 0.19406C0.952943 -0.0646825 0.482503 -0.0646825 0.199535 0.19406C0.0668468 0.316576 0 0.474032 0 0.631489C0 0.789388 0.0668468 0.946845 0.199535 1.06936Z" fill="#E0115F"/>
    </svg>
  </ChevronWrapper>
)


Chevron.defaultProps = {
  rotate: 'down',
  width: '10',
  height: '6',
}
export default React.memo(Chevron)