import React from 'react';
import { Flex } from 'antd-mobile';

import SimpleList from 'shared/components/List/SimpleList';
import { SearchSectionContainer } from './SearchStyle';

const RecentSearch: React.FC = () => (
  <SearchSectionContainer>
    <Flex justify="between">
      <h1>recent</h1>
      <p>clear recent</p>
    </Flex>
    <SimpleList title="Fringe Hair Design Studio" />
    <SimpleList title="Spa and pedicure" />
  </SearchSectionContainer>
);

export default RecentSearch;
