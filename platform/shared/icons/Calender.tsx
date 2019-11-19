import React from 'react';

interface Props {
  width?: string,
  height?: string,
  className?: string
}
const Booking: React.FC<Props> =({ height, width }) => (
  <svg width={width} height={height} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path
  d="M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V8h16v13z" fill="#A59A27"/><path fill="none" d="M0 0h24v24H0z"/>
  </svg>
);

Booking.defaultProps = {
  height: '26',
  width: '30',
};

export default Booking;