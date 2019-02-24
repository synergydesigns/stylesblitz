import styled from 'styled-components'
import { color, font } from '../global'

export const JumbotronWrapper = styled.div`
  position: relative;
`

export const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 600px;
  background-color: #000;
  opacity: 0.4;
`

export const Background = styled.div`
  position: relative;
  z-index: 1;

  .overlay {
    position: absolute;
    height: 600px;
    width: 100%;
    background: black;
    opacity: .4;
  }
`

export const JumbotronBody = styled.div`
  position: absolute;
  z-index: 2;
  width: 100%;
  top: 0;
  display: flex;
  flex-flow: column;
  align-items: center;

  .content {
   max-width: 950px;
   margin: 100px 0px 40px;
  }

  .text-header {
    color: #FFFFFF;
    font: bold 48px/58px ${font.tertiary};
    margin-bottom: 20px;
  }

  .text-info {
    color: #FFFFFF;
    font: 200 24px/30px ${font.primary};
    margin-bottom: 20px;
  }

  .blue {
    color: ${color.primary}
  }

  .content {
    margin-top: 100px;
  }
`