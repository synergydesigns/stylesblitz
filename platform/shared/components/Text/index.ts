import styled from 'styled-components';
import { font as fonts, color as colors } from '../../global';

interface Props {
  color?: string
  backgroundColor?: string
  size?: string
  lineHeight?: string
  weight?: string
  font?: string
  showBackGround?: boolean
}

export const H1 = styled.h1<Props>`
  position: relative;
  width: fit-content;
  color: ${({ color }) => color};
  font: ${({
    size, lineHeight, weight, font,
  }) => `${weight} ${size}/${lineHeight} ${font}`};
  z-index: 2;
  &::before {
    display: block;
    content: '';
    background: ${({ backgroundColor, showBackGround }) => showBackGround && backgroundColor};
    position: absolute;
    z-index: -1;
    bottom: -3px;
    width: 102%;
    height: 50%;
  }
`;

H1.defaultProps = {
  size: '3em',
  lineHeight: '1.2em',
  weight: 'bold',
  font: fonts.secondary,
  backgroundColor: colors.secondary,
  showBackGround: false,
  color: colors.black,
};

export const H2 = styled(H1)`
  font: ${({
    size, lineHeight, weight, font,
  }) => `${weight} ${size}/${lineHeight} ${font}`};
`;
H2.defaultProps = {
  size: '2.5em',
};

export const H3 = styled(H1)`
  font: ${({
    size, lineHeight, weight, font,
  }) => `${weight} ${size}/${lineHeight} ${font}`};
`;

H3.defaultProps = {
  size: '2em',
};

export const P = styled.p<Props>`
  font: ${({
    size, lineHeight, weight, font,
  }) => `${weight} ${size}/${lineHeight} ${font}`};
`;
  P.defaultProps = {
    size: '12px',
    lineHeight: '16px',
    weight: 'light',
    font: fonts.primary,
    backgroundColor: colors.secondary,
    showBackGround: false,
    color: colors.black,
 };

export default {
  H1,
};
