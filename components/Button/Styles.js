import styled from 'styled-components'

import { font, color } from '../global'

export const ButtonWrapper = styled.button`
  background-color: ${({background}) => background || '#073c87'};
  border-radius: 5px;
  border: 0px;
  box-shadow: ${props => props.boxShadow};
  color: ${props => props.color};
  cursor: pointer;
  height: ${props => props.height};
  font: normal 14px/normal ${font.primary};
  letter-spacing: normal;
  outline-width: 0;
  width: ${props => props.width};

  &:hover {
    background-color: ${props => props.primary ? color.secondary : color.primary };
    transition: .6s;
    color: #fff;
  }
`