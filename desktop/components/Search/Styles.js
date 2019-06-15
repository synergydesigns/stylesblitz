import styled from 'styled-components'
import { color, font } from '../global'

export const placeholderColor = '#e7e5e8'

export const ProviderWrapper = styled.form`
  height: 100px;
  width: 1000px;
  border-radius: 50px;
  background-color: ${color.white};
  box-shadow: 0 0 22px 1px rgba(95,95,95,0.13);
`

export const ProviderFormWrapper = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: space-evenly;
`

export const ProviderInputWrapper = styled.div`
  position: relative;

  p {
    color: #757575;
    font: normal 14px/19px  ${font.secondary};
    margin: 12px 0px 0px 20px;
    position: absolute;
    top: -5px;
  }

  label {
    position: absolute;
    top: 40px;
    left: 12px;
    z-index: 1;
  }

  input {
    background-color: ${color.white};
    border-radius: 50px;
    box-shadow: 0 0 10px 4px rgba(0, 0, 0, 0.04);
    border: none;
    height: 50px;
    margin-top: 30px;
    outline: none;
    padding-left: 50px;
    position: relative;
    width: 350px;
    text-transform: capitalize;
    font: normal 16px/19px  ${font.secondary};


    &::placeholder {
      color: ${placeholderColor};
      font: normal 16px/19px  ${font.secondary};
    }
  }
`
