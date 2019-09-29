import React from 'react';

import SearchHeader from './SearchHeader';


interface ICalendar {
  visible: boolean;
  startTime?: string;
  endTime?: string;
}

const Search: React.FC = () => <SearchHeader />;

export default Search;
