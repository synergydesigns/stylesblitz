import React from 'react';

import { SearchBar } from 'antd-mobile';
import {
  SearchBarWrapper,
} from './InputStyle';

interface SearchProps {
  onSubmit?: () => void
  onClear?: () => void
  onFocus?: () => void
  onBlur?: () => void
  onCancel?: () => void
  placeholder?: string
}

const Search: React.FC = ({ placeholder, ...props }) => (
  <SearchBarWrapper>
    <SearchBar
      placeholder={placeholder}
      {...props}
      showCancelButton={false}
    />
  </SearchBarWrapper>

);

export default Search;
