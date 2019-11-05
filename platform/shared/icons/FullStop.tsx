import React from 'react';

interface Props {
  width?: string,
  height?: string,
  fill?: string
  className?: string
}

const FullStop: React.FC<Props> =({ height, width }) => (
  <svg width={width} height={height} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="8"
    />
  </svg>
);

FullStop.defaultProps = {
  height: '4',
  width: '4',
};

export default FullStop;
