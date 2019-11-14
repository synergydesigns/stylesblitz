import styled from 'styled-components';

import { color, font } from 'shared/global';

export const SearchSectionContainer = styled.section`
  padding-bottom: 32px;
  border-bottom: 1px solid ${color.lightBlueShadeOne};
  width: 100%;
  margin-top: 32px;

  h1 {
    font: 600 18px/25px ${font.primary};
    text-transform: capitalize;
    margin-bottom: 10px;
  }

  .search-list {
    .am-list-item {
      margin-bottom: 24px;
    
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
`;

export default SearchSectionContainer;
