import React from 'react';

import shortId from 'lib/utils/shortId';
import { WithDistance } from 'shared/components/List/SimpleList';
import { SearchSectionContainer } from './SearchStyle';

const RecentSearch: React.FC = () => (
  <SearchSectionContainer>
    <h1>services</h1>
    <div className="search-list">
      {
        Array(10).fill(1).map(
          (value, index) => (
            <WithDistance
              key={shortId(index)}
              title="Fringe Hair Design Studio"
              price="$8,000"
              distance="3.3km"
              time="44mins"
              rating={4}
            />
          ),
        )
      }
    </div>
  </SearchSectionContainer>
);

export default RecentSearch;
