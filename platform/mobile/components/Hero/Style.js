import styled from 'styled-components'
import { font, color } from '../../../shared/global'

export const HeroContainer = styled.section`
  position: relative;
  width: 100%;
  height: 295px;
  left: 0px;
  top: 0px;
  background: ${color.white};

  svg {
    position: absolute;
    top: 145px;
  }
`

export const HeroImage = styled.img`
  position: absolute;
  display: inline-block;
  height: ${({ height }) => height};
  min-width: ${({ width }) => width};
  width: ${({ width }) => width};
  background-image: url(${({ src }) => src});
  background-position: center;
  background-size: cover;
  z-index: 3;
  top: ${({ top }) => top};
  right: 0;
`

export const HeroHeading = styled.h1`
  position: relative;
  width: fit-content;
  left: 20px;
  top: 110px;
  font: bold 28px/36px ${font.secondary};
  z-index: 2;

  &::before {
    display: block;
    content: '';
    background: ${color.yellow};
    position: absolute;
    z-index: -1;
    bottom: -3px;
    width: 102%;
    height: 18px;
  }
`

export const HeroSubHeader = styled.h2`
  position: absolute;
  width: 268px;
  height: 40px;
  left: 20px;
  top: 194px;
  font: 600 18px/20px ${font.primary};
  font-style: normal;
  color: ${color.black};
`
