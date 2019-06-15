import React from 'react'
import Select, { components } from 'react-select';

import Svg from '../Svg'
import { font } from '../global'
import { placeholderColor, SelectAdapterSvg } from './Styles'

const DropdownIndicator = () => {
  return (
      <SelectAdapterSvg >
        <Svg icon="arrowDownCircle" heigh="20" width="20" fill={placeholderColor} />
      </SelectAdapterSvg>
  );
};

const placeholder =  styles => ({
  ...styles,
  color: placeholderColor,
  font: `300 12px/24px ${font.primary}`,
  marginLeft: '33px',
  top: '43%'
})

const input =  styles => ({
  ...styles,
  color: placeholderColor,
  font: `300 12px/24px ${font.primary}`,
  paddingLeft: '40px',
  outline: 'none',
  paddingLeft: '40px'

})

const control =  styles => ({
  ...styles,
  border: '1px solid #E6E6E6',
  height: '50px', 
  width: '354px',
  outline: 'none'
})

const indicatorSeparator =  styles => ({
  ...styles,
  display: 'none',
  height: '40px',
  margin: '0'
})

const customStyles = {
  option: (style) => ({ ...style, position: 'relative', zIndex: 5}),
  control,
  input,
  placeholder,
  indicatorSeparator,
  singleValue: (styles) => ({ ...placeholder(styles) }) 
}

const SelectAdapter = ({ input, ...rest }) => (
  <Select
    styles={customStyles}
    placeholder={'gender'}
    components={{ DropdownIndicator }} 
    { ...input} {...rest}

  >Hello</Select>
)

export default {
  SelectAdapter
}