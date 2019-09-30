import React from 'react';

interface Props {
  color1?: string
  color2?: string
  color3?: string
  color4?: string
}


const DefaultAvatar: React.FC<Props> = ({
  color1, color2, color4, color3,
}) => (
  <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <mask id="mask0" maskType="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="50" height="50">
      <circle cx="25" cy="25" r="25" fill={color1} />
    </mask>
    <g mask="url(#mask0)">
      <circle cx="25" cy="25" r="25" fill={color2} />
      <rect x="-23" y="7" width="43" height="33" rx="16.5" fill={color1} />
      <rect x="25" y="24" width="43" height="42" rx="21" fill={color3} />
      <rect x="29" y="-15" width="19" height="31" fill={color4} />
    </g>
  </svg>
);

DefaultAvatar.defaultProps = {
  color1: '#87C0F6',
  color2: '#87F6EF',
  color3: '#87C0F6',
  color4: '#3477DC',
};

export default DefaultAvatar;
