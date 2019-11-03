/* eslint-disable react/no-danger */
import React, { useState, Fragment } from 'react';

import escapeRegExp from 'lib/utils/escapeRegExp';
import AutoCompleteInput, {
  DropDown, DropDownItem,
} from './AutoCompleteStyle';

interface DataSource {
  label: string
  value: any
}

interface DropDownProps {
  value: string
  datasource?: DataSource[]
  onselect?: (label: string, value: any) => void
}

const matchAndReplaceText = (text: string, value: string) => text.replace(
  RegExp(escapeRegExp(value), 'gmi'),
  word => `<span class="am-autocomplete-highlighted">${word}</span>`,
);

const matchFound = (text: string, value: string) => RegExp(escapeRegExp(value), 'gmi').test(text);

const AutoCompleteDropDown: React.FC<DropDownProps> = ({ datasource, onselect, value }) => (
  <DropDown>
    {datasource.filter(
      data => matchFound(data.label, value),
    ).map(data => (
      <DropDownItem
        key={data.label}
        onClick={() => onselect(data.label, data.value)}
      >
        <div dangerouslySetInnerHTML={{ __html: matchAndReplaceText(data.label, value) }} />
      </DropDownItem>
    ))}
  </DropDown>
);

interface Props {
  data: DataSource[]
  onselect?: (value: string) => void
  onchange?: (value: string) => void
  style?: React.CSSProperties
}

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
    <Fragment>
      <AutoCompleteInput
        showCancelButton={false}
        placeholder="Find a service"
        onChange={onChange}
        value={value}
        style={style}
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
    </Fragment>
  );
};

AutoComplete.defaultProps = {
  onselect: () => {},
  onchange: () => {},
};

export default AutoComplete;
