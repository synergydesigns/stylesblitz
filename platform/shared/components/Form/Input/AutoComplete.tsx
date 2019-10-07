/* eslint-disable react/no-danger */
import React, { useState, Fragment } from 'react';

import escapeRegExp from 'lib/utils/escapeRegExp';
import AutoCompleteInput, {
  DropDown, DropDownItem,
} from './AutoCompleteStyle';

interface DropDownProps {
  value: string
  datasource: string[]
  onselect?: (value: string) => void
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
      >
        <div dangerouslySetInnerHTML={{ __html: matchAndReplaceText(data, value) }} />
      </DropDownItem>
    ))}
  </DropDown>
);

interface Props {
  data: string[]
  onselect?: (value: string) => void
  onchange?: (value: string) => void
  style?: React.CSSProperties
}


const AutoComplete: React.FC<Props> = ({
  data, onselect, onchange, style,
}) => {
  const [datasource] = useState(data);
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

  const onItemClicked = (selectedValue) => {
    setValue(selectedValue);
    onselect(selectedValue);
    setShowDropDown(false);
  };

  return (
    <Fragment>
      <AutoCompleteInput
        showCancelButton={false}
        placeholder="Find a service"
        onChange={onChange}
        value={value}
        style={style}
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
    </Fragment>
  );
};

AutoComplete.defaultProps = {
  onselect: () => {},
  onchange: () => {},
};

export default AutoComplete;
