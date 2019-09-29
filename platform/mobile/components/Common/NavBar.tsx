import React from 'react';
import TabBar from 'antd-mobile/lib/tab-bar';
import { withRouter, SingletonRouter } from 'next/router';

import {
  Home,
  Search,
  Hamburger,
  User,
} from '../../../shared/icons';
import { color } from '../../../shared/global';
import { NavBarWrapper } from './Style';

type Props = {
  router: SingletonRouter
}

const NavBar: React.FC<Props> = props => (
  <NavBarWrapper>
    <TabBar
      unselectedTintColor="#949494"
      tintColor="#33A3F4"
      barTintColor={color.primary}
      hidden={false}
    >
      <TabBar.Item
        key="home"
        icon={<Home />}
        selectedIcon={<Home />}
        data-seed="logId"
        onPress={() => props.router.push('/')}
      />
      <TabBar.Item
        key="search"
        icon={<Search />}
        selectedIcon={<Search />}
        onPress={() => props.router.push('/search')}
        data-seed="logId"
      />
      <TabBar.Item
        key="user"
        icon={<User />}
        selectedIcon={<User />}
        data-seed="logId"
        onPress={() => props.router.push('/search')}
      />
      <TabBar.Item
        key="menu"
        icon={<Hamburger />}
        selectedIcon={<Hamburger />}
        data-seed="logId"
        onPress={() => props.router.push('/search')}
      />
    </TabBar>
  </NavBarWrapper>
);

export default withRouter(NavBar);
