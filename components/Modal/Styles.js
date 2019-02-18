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
  min-height: 500px;
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

export const ModalBodyWrapper = styled.div`
  margin: 30px auto;
`

export const ForgotPasswordWrapper = styled(ModalBodyWrapper)``

export const LoginModalWrapper = styled(ModalBodyWrapper)``

export const AuthFooterWrapper = styled.div`
  position: relative;
  width: 350px;
`

export const LoginControl = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 12px;
`

export const LoginControlForgotPassword = styled.div`
  color: #565B73;
  font: 200 14px/4px ${font.primary};
  top: 5px;
  width: 200px;
  text-align: left;

  p {
    line-height: 18px;
    margin: 0px;
    text-align: right;
  }
`

export const LoginControlButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`

export const Or = styled.h3`
  color: #878787;
  font: normal 14px/20px ${font.secondary};
  text-align: center;
  text-transform: uppercase;
`
