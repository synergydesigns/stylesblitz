import React from 'react';

interface Props {
  width?: string,
  height?: string
}

const Cart: React.FC<Props> = ({ width, height }) => (
  <svg width={width} height={height} viewBox={`0 0 ${height} ${width}`} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.181 8.25H4.56797C4.19559 8.26506 3.84215 8.4182 3.57651 8.67959C3.31086 8.94099 3.15203 9.29191 3.13097 9.664L1.13097 21.506C1.10142 21.7165 1.11598 21.9308 1.17371 22.1354C1.23143 22.34 1.33108 22.5303 1.46631 22.6943C1.60154 22.8584 1.7694 22.9924 1.95922 23.0881C2.14905 23.1838 2.3567 23.2389 2.56897 23.25H19.18C19.3921 23.2388 19.5996 23.1835 19.7893 23.0878C19.979 22.9921 20.1466 22.858 20.2817 22.6939C20.4167 22.5299 20.5162 22.3396 20.5737 22.1351C20.6313 21.9306 20.6457 21.7164 20.616 21.506L18.616 9.664C18.5949 9.29224 18.4364 8.94159 18.1712 8.68024C17.9059 8.4189 17.553 8.26554 17.181 8.25Z" stroke="#323645" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M14.56 5.307C14.3956 4.44901 13.9379 3.67488 13.2655 3.11719C12.593 2.5595 11.7476 2.25294 10.874 2.25V2.25C10.0037 2.25281 9.1613 2.55702 8.49002 3.1109C7.81873 3.66477 7.36006 4.43409 7.19202 5.288" stroke="#323645" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M20.624 0.75L18.374 3V5.25H20.624L22.874 3L20.624 0.75Z" stroke="#323645" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);


Cart.defaultProps = {
  width: '24',
  height: '24',
};

export default React.memo(Cart);
