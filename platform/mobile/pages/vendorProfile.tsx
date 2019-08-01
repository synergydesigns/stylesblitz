import * as React from 'react'
import { Tabs, WhiteSpace, Badge, Flex } from 'antd-mobile'
import { color } from 'globals'
import * as Icon from 'shared/icons'

import VendorProfileHeader from '../components/Header/Vendor/VenderProfileHeader'

import Layout from './layout';

const tabs = [
  { title: <Icon.Service /> },
  { title: <Icon.Review /> },
  { title: <Icon.Gallery /> },
];

const VendorProfile: React.FC = () => (
  <Layout>
    <VendorProfileHeader />
    <WhiteSpace size="xl" />
    <Tabs tabs={tabs} initialPage={1} tabBarUnderlineStyle={{ borderColor: color.primary, top: 0, bottom: 'inherit' }}>
      <Flex justify="center">services</Flex>
      <Flex justify="center">reviews</Flex>
      <Flex justify="center">Gallery</Flex>
    </Tabs>    
  </Layout>
)

export default VendorProfile