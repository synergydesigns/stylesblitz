import styled from 'styled-components'
import { font } from '../global'

export const placeholderColor = '#878787'

export const InputWrapper = styled.div`
position: relative;

input {
  height: 50px;
  width: 350px;
  border: 1px solid #E6E6E6;
  border-radius: 5px 5px 0 0;
  outline: none;
  color: ${placeholderColor};

  &::placeholder {
    color: ${placeholderColor};
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

export const CheckboxWrapper = styled.div`
  position: relative;

  input[type=checkbox] {
    visibility: hidden;
  }

  span {
    color: #565B73;
    font: 200 14px/4px ${font.primary};
    margin-left: 20px;
    position: absolute;
    top: 5px;
    width: 200px;
  }

  label {
    background: #ff9907;
    border: 1px solid #ff9907;
    cursor: pointer;
    height: 12px;
    left: 0;
    position: absolute;
    top: 0;
    width: 12px;
  }

  label:after {
    background: transparent;
    border: 2px solid #ffffff;
    border-top: none;
    border-right: none;
    border-radius: 2px;
    content: '';
    height: 3px;
    left: 1px;
    position: absolute;
    opacity: 0;
    top: 2px;
    transform: rotate(-45deg);
    width: 7px;
  }

  label:hover::after {
    opacity: 0.5;
  }

  input[type='checkbox']:checked + label:after {
    opacity: 1;
  }
`

export const SelectAdapterSvg = styled.div`
  position: relative;
  top: -3px;
  margin-right: 8px;
`
