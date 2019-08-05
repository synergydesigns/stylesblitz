import * as React from 'react'
import { Tabs, WhiteSpace, Badge, Flex } from 'antd-mobile'
import { color } from 'globals'
import * as Icon from 'shared/icons'

import Layout from './layout';
import VendorProfileHeader from '../components/Header/Vendor/VenderProfileHeader'
import ServiceListing from '../components/Service/ServiceListing'
import VendorGallery from '../components/Gallery/VendorGallery'

const tabs = [
  { title: <Icon.Service /> },
  { title: <Icon.Review /> },
  { title: <Icon.Gallery /> },
];

const VendorProfile: React.FC = () => (
  <Layout
    showHeader={false}
    showFooter={false}
    showNav={false}
  >
    <VendorProfileHeader />
    <WhiteSpace size="xl" />
    <Tabs
      tabs={tabs}
      initialPage={2}
      tabBarUnderlineStyle={{ borderColor: color.primary, top: 0, bottom: 'inherit' }}
    >
      <Flex justify="center">
        <ServiceListing />
      </Flex>
      <Flex justify="center">reviews</Flex>
      <Flex justify="center">
        <VendorGallery />
      </Flex>
    </Tabs>    
  </Layout>
)

export default VendorProfile