import * as React from 'react'
import { Tabs, WhiteSpace, Badge, Flex } from 'antd-mobile'
import { color } from 'globals'
import * as Icon from 'shared/icons'

import Layout from './layout';
import VendorProfileHeader from '../components/Header/Vendor/VenderProfileHeader'
import ServiceListing from '../components/Service/ServiceListing'

const tabs = [
  { title: <Icon.Service /> },
  { title: <Icon.Review /> },
  { title: <Icon.Gallery /> },
];

const VendorProfile: React.FC = () => (
  <Layout>
    <VendorProfileHeader />
    <WhiteSpace size="xl" />
    <Tabs
      tabs={tabs}
      initialPage={0}
      tabBarUnderlineStyle={{ borderColor: color.primary, top: 0, bottom: 'inherit' }}
    >
      <Flex justify="center">
        <ServiceListing />
      </Flex>
      <Flex justify="center">reviews</Flex>
      <Flex justify="center">Gallery</Flex>
    </Tabs>    
  </Layout>
)

export default VendorProfile