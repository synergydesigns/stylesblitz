/* eslint-disable react/no-danger */
import React, { useState, useEffect } from 'react';

import AutoCompleteInput, { AutoCompleteWrapper } from './AutoCompleteStyle';
import AutoCompleteDropDown from './AutoCompleteDropDown';
import { Props } from './interface';


const AutoComplete: React.FC<Props> = ({
  data, onselect, onchange, style, fullPage, loading, ...props
}) => {
  const [value, setValue] = useState('');
  const [source, setSource] = useState(data);

  const onChange = (formValue) => {
    setValue(formValue);
    onchange(formValue);
  };

  useEffect(() => {
    setSource(data);
  }, [data]);

  const onItemClicked = (label, selectedValue) => {
    setValue(label);
    setSource([]);
    onselect(selectedValue);
  };

  const onFocus = () => {

  };

  const onBlur = () => {
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
          datasource={source}
          onselect={onItemClicked}
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
  width: '100%',
};

export default AutoComplete;
