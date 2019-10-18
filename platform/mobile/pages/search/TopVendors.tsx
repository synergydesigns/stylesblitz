import React from 'react';

import TopList from 'shared/components/List/TopList';
import { SearchSectionContainer } from './SearchStyle';

const RecentSearch: React.FC = () => (
  <SearchSectionContainer>
    <h1>top vendors</h1>
    <div className="search-list">
      <TopList title="Weavon Fixing" />
      <TopList title="Fringe Hair Design Studio" />
    </div>
  </SearchSectionContainer>
);

export default RecentSearch;
