import React from 'react';
import { Flex } from 'antd-mobile';

import TopList from 'shared/components/List/TopList';
import { SearchSectionContainer } from './SearchStyle';

const RecentSearch: React.FC = () => (
  <SearchSectionContainer>
    <Flex className="search-section__header">
      <h1>top vendors</h1>
    </Flex>
    <div className="search-list">
      <TopList title="Weavon Fixing" />
      <TopList title="Fringe Hair Design Studio" />
    </div>
  </SearchSectionContainer>
);

export default RecentSearch;
