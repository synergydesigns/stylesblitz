import styled, { css } from 'styled-components'
import { font, color, zIndex } from '../global'

export const ModalWrapper = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  height: 100%;
  width: 100%;
  overflow: hidden;
`
export const ModalOverlay = styled.div`
  background-color: #969696;
  height: 100%;
  width: 100%;
  position: fixed;
  opacity: .45;
  z-index: ${zIndex.modalOverlay};
`

export const ModalBody = styled.div`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 3px 30px 0 rgba(58,58,58,0.09);
  height: 500px;
  width: 450px;
  z-index: ${zIndex.modalOverlay};
`
export const AuthHeader = styled.div`
  h1, h3 {
    text-align: center;
    margin: 5px;
  }

  h1 {
    color: ${color.black};
    font: 400 25px/30px ${font.secondary};
    
    span {
      color: ${color.primary}
    }
  }

  h3 {
    color: ${color.lightGray};
    font: 200 18px/20px ${font.secondary};
    margin: 15px;
  }
`

export const ForgotPasswordWrapper = styled.div`
  margin-top: 50px;
`

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