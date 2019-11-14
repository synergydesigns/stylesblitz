/* eslint-disable react/no-danger */
import React, { useState, useEffect } from 'react';
import { useWindowSize } from 'react-use';

import escapeRegExp from 'lib/utils/escapeRegExp';
import ClipLoader from 'react-spinners/ClipLoader';
import { DropDown, DropDownItem } from './AutoCompleteStyle';
import { DropDownProps } from './interface';

const matchAndReplaceText = (text: string, value: string) => text.replace(
  RegExp(escapeRegExp(value), 'gmi'),
  word => `<span class="am-autocomplete-highlighted">${word}</span>`,
);

const matchFound = (text: string, value: string) => RegExp(escapeRegExp(value), 'gmi').test(text);

const AutoCompleteDropDown: React.FC<DropDownProps> = ({
  datasource, onselect, value, focused, ...props
}) => {
  const [customHeight, setCustomHeight] = useState('initial');
  const size = useWindowSize();

  useEffect(() => {
    if (focused) {
      setCustomHeight(`${size.height}px`);
    } else {
      setCustomHeight('initial');
    }
  }, [size, focused]);

  return (
    <DropDown customHeight={customHeight}>
      {
        <ClipLoader
          sizeUnit="px"
          size={50}
          color="#123abc"
          loading={props.loading}
        />
      }

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
};

AutoCompleteDropDown.defaultProps = {
  loading: false,
};

export default AutoCompleteDropDown;
