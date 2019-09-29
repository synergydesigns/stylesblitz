import React from 'react';
import { Button, NavBar, Icon } from 'antd-mobile';

import { Cart } from 'shared/icons';

const SearchHeader: React.FC = () => (
  <NavBar
    mode="dark"
    icon={<Icon type="left" />}
    onLeftClick={() => console.info('onLeftClick')}
    rightContent={[
      <Cart key="0" />,
    ]}
  >
Search
    <Button type="primary">default</Button>
  </NavBar>
);

export default SearchHeader;
