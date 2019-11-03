import React, { useState } from 'react';
import { Sticky } from 'react-sticky';
import { useDebounce } from 'react-use';

import Autocomplete from 'shared/components/Form/Input/AutoComplete';
import { useSuggestionsLazyQuery } from 'shared/graphql/typings';

const stickyStyle = {
  zIndex: 5,
  width: '100%',
  left: 0,
  transition: '2s',
  boxShadow: '0px 4px 70px rgba(0, 0, 0, 0.05)',
};

const SearchForm: React.FC = () => {
  const [value, setValue] = useState('');
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

  return (
    <Sticky topOffset={60}>
      {({ style }) => (
        <div style={{ ...style, ...stickyStyle }}>
          <Autocomplete
            onchange={setValue}
            data={formatedSuggestions}
            onselect={onselect}
          />
        </div>
      )}
    </Sticky>
  );
};

export default SearchForm;
