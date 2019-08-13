import styled from 'styled-components'
import { font, color } from '../../../shared/global'

export const FooterWrapper = styled.footer`
  padding: 30px 20px 60px 20px;

  & > h1 {
    font: 600 24px/33px ${font.primary};
    margin-bottom: 13px;
  }

  & > p {
    font: normal 16px/33px ${font.semiPrimary}
  }
`

export const FootLinks = styled.div`
  margin-top: 20px;
  text-transform: capitalize;

  h1 {
    font: bold 18px/25px ${font.semiPrimary};
    margin-bottom: 10px;
  }

  ul li {
    font: normal 16px/32px ${font.semiPrimary};
    margin-bottom: 10px;
  }
`

export const FooterSocial = styled.div`
  margin: 30px 0px;

  h1 {
    font: bold 18px/25px ${font.semiPrimary};
    text-transform: capitalize;
    margin-top: 30px;
    margin-bottom: 10px;
  }

  img {
    margin-right: 10px;
  }
`

export const HomeInputWrapper = styled.div`
  display: flex;
  align-items: center;

  & > input[type=text] {
    width: 100%;
    height: 53px;
    left: 20px;
    top: 1655px;
    background: #F5F5F5;
    border: none;
    outline: none;
    font: normal 16px/19px ${font.semiPrimary};
    padding-left: 20px;
  }

  button {
    width: 65px;
    height: 53px;
    background-color: ${color.primary};
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    
    svg {
      path {
        fill: ${color.white}
      }
    }
  }
`

export const NavBarWrapper = styled.div`
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;
  z-index: 4;
  .am-tab-bar-bar  {
    background: ${color.primary}
  }
`