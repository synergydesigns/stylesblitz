import styled from 'styled-components'
import { font, color } from '../../../shared/global'

export const HeroContainer = styled.section`
  position: relative;
  width: 100%;
  height: 295px;
  left: 0px;
  top: 0px;
  background: ${color.white};

  & > svg {
    position: absolute;
    top: 145px;
  }

  .input-wrapper {
    position: absolute;
    bottom: -60px;
    width: 100%;
  }
`

export const HeroImage = styled.img<{ width?: string, height?: string, src: string, top?: string}>`
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

export const HomeVendorWrapper = styled.div`
  width: 100%;
  height: 240px;
  background: ${color.yellow};
  color: ${color.black};
  padding: 40px 20px;
  position: relative;

  h1 {
    font: normal 18px/25px ${font.primary};
  }

  h3 {
    font: bold 24px/29px ${font.secondary};
  }

  & > svg {
    position: absolute;
    top: 0;
    right: 0;
  }
`

export const HomeVendorButton = styled.button`
  width: 227px;
  height: 50px;
  background: ${color.white};
  border-radius: 30px;
  display: flex;
  margin-top: 20px;
  border: none;
  align-items: center;
  justify-content: space-around;

  p {
    font: bold 16px/22px ${font.semiPrimary};
    color: ${color.black};
  }
`
