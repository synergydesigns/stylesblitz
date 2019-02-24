import styled from 'styled-components'

import { color, font } from '../global'

export const LogoWrapper = styled.div`
  display: inline-block;
  width: 154px;	
  text-shadow: 0 2px 4px 0 rgba(0,0,0,0.5);
  text-transform: uppercase;

  h1 {
    color: ${({ color }) => color};
    font: 900 20px/30px ${font.tertiary};
    margin: 0px;
  }

  span {
    background-color: ${color.primary};
    color: ${color.white};
    display: inline-block;
    margin-right: 10px;
    padding: 5px 10px;
  }
`

export const HeaderWrapper = styled.div`
    align-items: center;
    display: flex;
    height: 100px;
    justify-content: center;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 10;
`

export const NavList = styled.ul`
  align-items: center;
  display: inline-flex;
  justify-content: space-between;
  list-style-type: none;
  margin: 0px;
  width: 300px;
  color: ${({ color }) => color};

  li {
    color: inherit;
    font: normal 16px/20px ${font.tertiary};
  }
`
export const NavWrapper = styled.div`
  display: inline-flex;
  height: 40px;
  justify-content: space-between;
  width: 1100px;
`