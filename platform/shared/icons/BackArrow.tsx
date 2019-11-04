import React from 'react';

interface Props {
  width?: string,
  height?: string,
  fill?: string
  className?: string
}

const BackArrow: React.FC<Props> =({ height, width }) => (
  <svg width={width} height={height} viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M10.04 1L1 9.38095L10.04 17"
      stroke="#323645"
    />
  </svg>
);

BackArrow.defaultProps = {
  height: '18',
  width: '11',
};

export default BackArrow;
