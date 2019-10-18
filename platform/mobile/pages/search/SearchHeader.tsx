import React from 'react';
import { NavBar } from 'antd-mobile';
import styled from 'styled-components';

import { Cart, Arrow } from 'shared/icons';

const Nav = styled(NavBar)`
  .am-navbar-left {
    padding-left: 0px;
  }

  .am-navbar-right {
    margin-right: 0;
  }
`;

const SearchHeader: React.FC = () => (
  <Nav
    mode="light"
    icon={<Arrow />}
    rightContent={[
      <Cart key="0" />,
    ]}
  >
  Search
  </Nav>
);

export default SearchHeader;
