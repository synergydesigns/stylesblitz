/* eslint-disable react/no-danger */
import React, { useState } from 'react';

import AutoCompleteInput, { AutoCompleteWrapper } from './AutoCompleteStyle';
import AutoCompleteDropDown from './AutoCompleteDropDown';
import { Props } from './interface';


const AutoComplete: React.FC<Props> = ({
  data, onselect, onchange, style, onfocus, onblur, fullPage, loading, ...props
}) => {
  const [value, setValue] = useState('');
  const [focused, setFocused] = useState(false);

  const onChange = (formValue) => {
    setValue(formValue);
    onchange(formValue);
  };

  const onItemClicked = (label, selectedValue) => {
    setValue(label);
    onselect(selectedValue);
  };

  const onFocus = () => {
    setFocused(true);
    if (onfocus) {
      onfocus();
    }
  };

  const onBlur = () => {
    setFocused(false);
    if (onblur) {
      onblur();
    }
  };
  return (
    <AutoCompleteWrapper style={{ ...style, width: props.width }}>
      <AutoCompleteInput
        showCancelButton={false}
        placeholder={props.placeholder}
        onChange={onChange}
        value={value}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      {
        <AutoCompleteDropDown
          value={value}
          datasource={data}
          onselect={onItemClicked}
          focused={focused}
          fullPage={fullPage}
          loading={loading}
        />
      }
    </AutoCompleteWrapper>
  );
};

AutoComplete.defaultProps = {
  onselect: () => {},
  onchange: () => {},
  placeholder: '',
  width: '80%',
};

export default AutoComplete;
