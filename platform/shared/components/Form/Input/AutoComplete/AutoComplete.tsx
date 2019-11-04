/* eslint-disable react/no-danger */
import React, { useState } from 'react';

import AutoCompleteInput, { AutoCompleteWrapper } from './AutoCompleteStyle';
import AutoCompleteDropDown from './AutoCompleteDropDown';
import { Props } from './interface';


const AutoComplete: React.FC<Props> = ({
  data, onselect, onchange, style,
}) => {
  const [value, setValue] = useState('');
  const [showDropDown, setShowDropDown] = useState(false);

  const onChange = (formValue) => {
    setValue(formValue);
    onchange(formValue);
    if (formValue.length > 0) {
      setShowDropDown(true);
    }

    if (!formValue) {
      setShowDropDown(false);
    }
  };

  const onItemClicked = (label, selectedValue) => {
    setValue(label);
    onselect(selectedValue);
    setShowDropDown(false);
  };

  return (
    <AutoCompleteWrapper style={style}>
      <AutoCompleteInput
        showCancelButton={false}
        placeholder="Find a service"
        onChange={onChange}
        value={value}
      />
      {
        (showDropDown && Boolean(data.length))
        && (
          <AutoCompleteDropDown
            value={value}
            datasource={data}
            onselect={onItemClicked}
          />
        )
      }
    </AutoCompleteWrapper>
  );
};

AutoComplete.defaultProps = {
  onselect: () => {},
  onchange: () => {},
};

export default AutoComplete;
