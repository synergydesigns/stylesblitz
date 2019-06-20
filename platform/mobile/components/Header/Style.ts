import styled from 'styled-components'
import { color } from '../../../shared/global'

export const HeaderWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 85px;
  left: 0px;
  top: 0px;
  z-index: 4;
  background: ${color.white};
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.05);

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
`

export const HeaderButton = styled.button`
  width: 122px;
  height: 47px;
  background: ${color.white};
  border: 1px solid ${color.darkGray};
  box-sizing: border-box;
  border-radius: 40px;
  font: bold 16px/22px Nunito;
  text-transform: capitalize;
  cursor: pointer;

  &:hover {
    color: ${color.white};
    background: ${color.primary};
    border: none;
  }
`
