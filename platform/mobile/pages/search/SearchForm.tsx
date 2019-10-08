import React from 'react';
import { Sticky } from 'react-sticky';

import Autocomplete from 'shared/components/Form/Input/AutoComplete';

const stickyStyle = {
  zIndex: 5,
  width: '100%',
  left: 0,
  transition: '2s',
  boxShadow: '0px 4px 70px rgba(0, 0, 0, 0.05)',
};

const SearchForm: React.FC = () => (
  <Sticky topOffset={60}>
    {({ style }) => (
      <div style={{ ...style, ...stickyStyle }}>
        <Autocomplete
          onchange={() => {}}
          data={[].map(({ name }) => name)}
        />
      </div>
    )}
  </Sticky>
);

export default SearchForm;
