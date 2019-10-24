import React from 'react';

interface Props {
width?: string,
height?: string,
fill?: string
}

const Like: React.FC<Props> = props => (
  <svg width={props.width} height={props.height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.967 6.24733C19.675 3.03407 17.4007 0.702777 14.5543 0.702777C12.6581 0.702777 10.9218 1.72322 9.94483 3.3587C8.9767 1.70207 7.31161 0.702393 5.44573 0.702393C2.5998 0.702393 0.32505 3.03368 0.0334945 6.24694C0.0104162 6.38887 -0.0842046 7.13584 0.203504 8.35399C0.618144 10.111 1.57589 11.7092 2.97251 12.9746L9.94022 19.2977L17.0276 12.975C18.4242 11.7092 19.3819 10.1114 19.7966 8.35399C20.0843 7.13623 19.9896 6.38926 19.967 6.24733ZM19.0477 8.17782C18.6692 9.78253 17.7918 11.2445 16.5129 12.4031L9.94483 18.263L3.48946 12.4046C2.20824 11.2438 1.33126 9.78215 0.952394 8.17744C0.68007 7.02468 0.792 6.37349 0.792384 6.36926L0.798154 6.33041C1.04817 3.51525 3.00251 1.47167 5.44573 1.47167C7.24853 1.47167 8.83554 2.57942 9.58866 4.36222L9.94291 5.20188L10.2972 4.36222C11.0384 2.60673 12.7092 1.47205 14.5547 1.47205C16.9975 1.47205 18.9523 3.51563 19.2073 6.36734C19.2081 6.37349 19.32 7.02506 19.0477 8.17782Z" fill={props.fill} />
  </svg>
);

Like.defaultProps = {
  height: '20',
  width: '20',
  fill: '#323645',
};

export default Like;
