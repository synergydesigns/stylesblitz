import React, { useState } from 'react';
import { Sticky } from 'react-sticky';
import { useDebounce } from 'react-use';

import Autocomplete from 'platform/shared/components/Form/Input/AutoComplete/AutoComplete';
import { useSuggestionsLazyQuery } from 'shared/graphql/typings';

interface style {
  zIndex: number
  width: string
  left: string
  transition: string
  boxShadow: string
  position?: string
  top?: string
  display?: string
  justifyContent?: string
}

const stickyStyle: style = {
  zIndex: 5,
  width: '100%',
  left: '0',
  transition: '2s',
  boxShadow: '0px 4px 70px rgba(0, 0, 0, 0.05)',
  display: 'flex',
  justifyContent: 'center',
};

const SearchForm: React.FC = () => {
  const [value, setValue] = useState('');
  const [width, setWidth] = useState('90%');
  const [offset, setOffSet] = useState(60);
  const [debounceValue, setDebounceValue] = useState('');
  const [loadSuggestions, { data }] = useSuggestionsLazyQuery();

  useDebounce(() => {
    setDebounceValue(value);
  }, 1000, [value]);

  if (debounceValue) {
    setDebounceValue('');
    loadSuggestions({
      variables: { query: debounceValue },
    });
  }

  const suggestions = (data && data.getSuggestions) ? data.getSuggestions : [];

  const formatedSuggestions = suggestions.map(suggestion => ({
    label: suggestion.query, value: suggestion,
  }));

  const onselect = () => {
    // handle selected value
  };

  const onfocus = () => {
    setOffSet(0);
    setWidth('100%');
  };

  const onblur = () => {
    // setWidth('90%');
    setOffSet(60);
  };
  return (
    <Sticky topOffset={offset}>
      {({ style }) => (
        <div style={{ ...style, ...stickyStyle }}>
          <Autocomplete
            onchange={setValue}
            data={formatedSuggestions}
            onselect={onselect}
            onfocus={onfocus}
            onblur={onblur}
            placeholder="Find a service"
            width={width}
          />
        </div>
      )}
    </Sticky>
  );
};

export default SearchForm;
