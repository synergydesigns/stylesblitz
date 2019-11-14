import React from 'react';
import styled from 'styled-components';
import { StickyContainer } from 'react-sticky';

import SearchHeader from './SearchHeader';
import RecentSearch from './RecentSearch';
import TopVendors from './TopVendors';
import Services from './Services';
import SearchFrom from './Suggestions/SearchForm';

const SearchContainer = styled.div`
  .am-list-item, .search-section__header {
    padding: 0px 22px;
  }
`;

const Search: React.FC = () => (
  <StickyContainer>
    <SearchContainer>
      <SearchHeader />
      <SearchFrom />
      <RecentSearch />
      <TopVendors />
      <Services />
    </SearchContainer>
  </StickyContainer>
);


export default Search;
