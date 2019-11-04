import styled from 'styled-components';
import { SearchBar, List } from 'antd-mobile';

import { color, font } from 'shared/global';

export default styled(SearchBar)`
  &.am-search {
    padding: 0px;
    border: 1px solid ${color.lightBlue};
    border-radius: 3px;
  }

  &.am-search.am-search-start .am-search-input input[type="search"] {
    padding: 0 50px 0 15px;
  }

  .am-search-synthetic-ph-container {
    span {
      font-family: ${font.primary};
      color: ${color.black};
    }
  }

  .am-search-input .am-search-clear {
    background-color: ${color.primary};
    background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='10' cy='10' r='10' fill='%233477DC'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M10.6738 9.6005L13.2853 6.69551L12.5668 6L10.002 8.85311L7.43711 6L6.7186 6.69551L9.33009 9.6005L6 13.3049L6.71852 14.0004L10.002 10.3479L13.2854 14.0004L14.0039 13.3049L10.6738 9.6005Z' fill='%23E9F0FB'/%3E%3C/svg%3E%0A");
    background-repeat: no-repeat;
    position: absolute;
    top: 15px;
    right: 15px;
    cursor: pointer;
    padding: 0px;
  }

  .am-search-cancel {
    display: none;
  }

  &.am-search-start .am-search-input input {
    background: ${color.lightBlueShadeOne};
    transition: .5s;
  }
`;

export const DropDown = styled.div`
  background-color: ${color.white};
  box-shadow: 0px 4px 70px rgba(0, 0, 0, 0.05);
  border-radius: 3px;
  transition: .5s;
`;

export const DropDownItem = styled(List.Item)`
  font: 300 16px/22px ${font.primary};
  display: flex;
  align-items: center;
  cursor: pointer;

  &.am-list-item {
    height: 40px;
  }

  &.am-list-item .am-list-line .am-list-content {
    padding: 0px;
  }

  &:hover {
    background-color: ${color.lightBlueShadeOne};;
    transition: .5s;
  }

  .am-autocomplete-highlighted {
    font-weight: 600
  }
`;

export const AutoCompleteWrapper = styled.div<{width?: number}>`

`;
