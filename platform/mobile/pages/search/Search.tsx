import React from 'react';
import styled from 'styled-components';
import { StickyContainer } from 'react-sticky';

// import userSearch from 'shared/graphql/search/searchService';
import SearchHeader from './SearchHeader';
import RecentSearch from './RecentSearch';
import TopVendors from './TopVendors';
import Services from './Services';
import SearchFrom from './SearchForm';

const SearchContainer = styled.div`
  padding: 0px 22px;
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
