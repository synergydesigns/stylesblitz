import React, { useState } from 'react';
import { Sticky } from 'react-sticky';

import Autocomplete from 'shared/components/Form/Input/AutoComplete';
import { useSearchServicesQuery } from 'shared/graphql/typings';

const stickyStyle = {
  zIndex: 5,
  width: '100%',
  left: 0,
  transition: '2s',
  boxShadow: '0px 4px 70px rgba(0, 0, 0, 0.05)',
};

const SearchForm: React.FC = () => {
  const [value, setValue] = useState('');

  useSearchServicesQuery({
    variables: { name: value },
  });

  return (
    <Sticky topOffset={60}>
      {({ style }) => (
        <div style={{ ...style, ...stickyStyle }}>
          <Autocomplete
            onchange={setValue}
            data={[].map(({ name }) => name)}
          />
        </div>
      )}
    </Sticky>
  );
};

export default SearchForm;
