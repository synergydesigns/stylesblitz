import styled, { css } from 'styled-components'
import { font, color, zIndex } from '../global'

export const InputWrapper = styled.div`
position: relative;
input {
  height: 50px;
  width: 350px;
  border: 1px solid #E6E6E6;
  border-radius: 5px 5px 0 0;
  outline: none;

  &::placeholder {
    color: #878787;
    font: 300 12px/24px ${font.primary};
  }
}
`

export const InputWrapperWithIcon = styled(InputWrapper)`
input {
  width: 310px;
  padding-left: 40px;
}

label {
  left: 13px;
  position: absolute;
  top: 22px;
  z-index: 1;
}
`

export const FormWrapper = styled.div`
margin: 20px 10px auto;

form {
  display: flex;
  flex-direction: column;
  align-items: center;
}
`