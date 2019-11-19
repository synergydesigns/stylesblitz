import React from 'react';

interface Props {
  width?: string
  height?: string
  className?: string
}

const Plus: React.FC<Props> =({ height, width }) => (
  <svg width={width} height={height} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/><path d="M0 0h24v24H0z" fill="none"/>
  </svg>
);

Plus.defaultProps = {
  height: '14',
  width: '14',
};

export default Plus;
