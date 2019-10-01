/* eslint-disable react/no-danger */
import React, { useState } from 'react';

import escapeRegExp from 'lib/utils/escapeRegExp';
import AutoCompleteInput, {
  DropDown, DropDownItem,
} from './AutoCompleteStyle';


interface Props {
  data: string[]
  onselect?: () => void
  onchange?: () => void
}

interface DropDownProps extends Props {
  value: string
}


const matchAndReplaceText = (text: string, value: string) => text.replace(
  RegExp(escapeRegExp(value), 'gmi'),
  word => `<span class="am-autocomplete-highlighted">${word}</span>`,
);

const matchFound = (text: string, value: string) => RegExp(escapeRegExp(value), 'gmi').test(text);

const AutoCompleteDropDown: React.FC<DropDownProps> = ({ datasource, onselect, value }) => (
  <DropDown>
    {datasource.filter(
      data => matchFound(data, value),
    ).map(data => (
      <DropDownItem
        onClick={() => onselect(data)}
        loading="false"
      >
        <div dangerouslySetInnerHTML={{ __html: matchAndReplaceText(data, value) }} />
      </DropDownItem>
    ))}
  </DropDown>
);

const AutoComplete: React.FC<Props> = ({ data, onselect, onchange }) => {
  const [datasource] = useState(data);
  const [value, setValue] = useState('');
  const [showDropDown, setShowDropDown] = useState(false);

  const onChange = (formValue) => {
    setValue(formValue);
    onchange(formValue);
    if (formValue.length > 0) {
      setShowDropDown(true);
    }
  };

  const onItemClicked = (selectedValue) => {
    setValue(selectedValue);
    onselect(selectedValue);
    setShowDropDown(false);
  };

  return (
    <>
      <AutoCompleteInput
        dataSource={datasource}
        showCancelButton={false}
        placeholder="Find a service"
        onChange={onChange}
        value={value}
      />
      {
        showDropDown
        && (
          <AutoCompleteDropDown
            value={value}
            datasource={datasource}
            onselect={onItemClicked}
          />
        )
      }
    </>
  );
};

AutoComplete.defaultProps = {
  onselect: () => {},
  onchange: () => {},
};

export default AutoComplete;
