import styled from 'styled-components'
import Drawer from 'antd/lib/drawer'

import { color } from '../../../shared/global'

export const SearchWrapper = styled.div`
  width: 320px;
  height: 40px;
  margin: 0 auto;
  margin-top: 20px;

  .auto-complete {
    color: #505050;
    background: #f5f5f5;
    width: 320px;
    margin: 0 auto;
    border: none;
  }

  .ant-select-selection__rendered {
    background: #f5f5f5;
  }

  .ant-input, .ant-select-search__field, .ant-input:focus, .ant-select-search__field:focus {
    height: 40px;
    color: #505050;
    background-color: #f5f5f5;
    border: none;
    outline: 0;
    border-radius: 0;
    padding-left: 20px;
    box-shadow: none;
  }

  .ant-select-selection__clear {
    margin-top: -4px;
  }

  .anticon {
    background: #f5f5f5;
    font-size: 16px;
  }

  .ant-select-dropdown-menu-item-active:not(.ant-select-dropdown-menu-item-disabled) {
    background: #000;
  }
  .ant-select-dropdown-menu-item-active {
    background: red;
  }
  .ant-select-dropdown-menu-item {
    background: #f5f5f5;
  }
  .ant-select-dropdown-menu .ant-select-dropdown-menu-item-active {
    background-color: green;
  }
`

export const RecentSearchWrapper = styled.div`
  margin: 0 auto;
  margin-top: 36px;
  width: 320px;

  h2 {
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 22px;
    color: #243C58;
  }

  ul {
    margin-top: 20px;
  }

  li {
    font-family: Nunito;
    font-style: normal;
    font-weight: normal;
    line-height: 16px;
    margin-bottom: 16px;
    color: #505050;
  }
`


export const SearchResultWrapper = styled.div`
  margin: 0 auto;
  width: 320px;
  margin-bottom: 30px;

  .search-item {
    width: 152px;
    display: inline-block;
    margin-bottom: 24px;

    &:nth-child(even) {
      margin-left: 16px;
    }

    img {
      width: 152px;
      height: 159px;
      margin-bottom: 14px;
    }

    .price {
      font-family: Nunito;
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 22px;
      color: #243C58;
    }

    .title {
      font-family: Nunito;
      font-style: normal;
      font-weight: 600;
      font-size: 12px;
      line-height: 16px;
      color: #999999;
    }

    .ant-rate {
      font-size: 13px;
    }

    .ant-rate-star, .ant-rate-star-full {
      width: 12%;
      color: #59C957;
    }

    .ant-rate-star:(:first-child) {
      margin-right: 0;
    }
  }
`

export const FilterSort = styled.div`
  width: 320px;
  margin: 0 auto;
  margin-top: 24px;
  margin-bottom: 46px;

  div {
    display: flex;
    justify-content: space-around;
    text-align: center;

    span {
      font-family: Nunito;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 19px;
      color: #505050;
      cursor: pointer;

      &:nth-child(2) {
        background-color: #505050;
        width: 2px;
      }

      &:nth-child(3) {
        div {
          display: inline-block;
          margin-bottom: 7px;
          margin-left: 5px;
        }
      }

      svg {
        path {
          fill: #505050;
        }
      }
    }
  }

  div:nth-child(2) {
    font-family: Nunito;
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    line-height: 14px;
    color: #C5C5C5;
    text-align: center;
    margin-top: 16px;
  }
`
export const FilterSearchWrapper = styled.div`
  width: 268px;
  height: 40px;
  margin: 0 auto;
  margin-top: 0;

  .auto-complete {
    color: #505050;
    background: #f5f5f5;
    width: 268px;
    margin: 0 auto;
    border: none;
  }

  .ant-select-selection__rendered {
    background: #f5f5f5;
  }

  .ant-input, .ant-select-search__field, .ant-input:focus, .ant-select-search__field:focus {
    height: 40px;
    color: #505050;
    background-color: #f5f5f5;
    border: none;
    outline: 0;
    border-radius: 0;
    padding-left: 20px;
    box-shadow: none;
  }

  .ant-select-selection__clear {
    margin-top: -4px;
  }

  .anticon {
    background: #f5f5f5;
    font-size: 16px;
  }

  .ant-select-dropdown-menu-item-active:not(.ant-select-dropdown-menu-item-disabled) {
    background: #000;
  }
  .ant-select-dropdown-menu-item-active {
    background: red;
  }
  .ant-select-dropdown-menu-item {
    background: #f5f5f5;
  }
  .ant-select-dropdown-menu .ant-select-dropdown-menu-item-active {
    background-color: green;
  }
`

export const DrawerWrapper = styled(Drawer)`
  .ant-drawer-content-wrapper {
    .ant-drawer-body {
      padding: 0;
    }
  }
`

export const Button = styled.button`
  width: 120px;
  height: 50px;
  background-color: ${color.primary};
  color: #fff;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  font-weight: bold;
  font-size: 16px;
  line-height: 22px;
  margin: 0 auto;
  margin-top: 28px;
`

export const DateTimePickerWrapper = styled.div`
  margin-left: 17px;
  margin-top: 20px;
  input {
    padding-left: 10px;
    background: #f5f5f5;
  }
`
export const SortListItemWrapper = styled.div<{ active: boolean }>`
  .mobile-icon {
    margin-top: 7px;
    color: #E0115F;
  }

  span {
    margin-left: ${({ active }) => !active && '38px'};
    font-size: 14px;
    color: #505050;
  }
`
