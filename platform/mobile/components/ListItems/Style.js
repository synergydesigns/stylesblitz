import styled from 'styled-components'
import { font } from '../../../shared/global'

export const Item = styled.div`
  width: 136px;
  height: 159px;
  h1 {
    font: bold 16px/22px ${font.primary};
  }

  h3 {
    font: normal 14px/19px ${font.primary};
  }
`

export const ItemImage = styled.img`
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
