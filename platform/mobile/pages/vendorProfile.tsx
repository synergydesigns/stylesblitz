import * as React from 'react'
import Flex from 'antd-mobile/lib/flex'
import WhiteSpace from 'antd-mobile/lib/white-space'
import SegmentedControl from 'antd-mobile/lib/tabs'
import WingBlank from 'antd-mobile/lib/wing-blank'
import Tabs from 'antd-mobile/lib/tabs'

import { color } from 'globals'
import * as Icon from 'shared/icons'

import Layout from './layout';
import VendorProfileHeader from '../components/Header/Vendor/VenderProfileHeader'
import ServiceListing from '../components/Service/ServiceListing'
import VendorGallery from '../components/Gallery/VendorGallery'
import VendorReview from '../components/Review/VendorReview'

const tabs = [
  { title: <Icon.Service /> },
  { title: <Icon.Review /> },
  { title: <Icon.Gallery /> },
];

const VendorProfile: React.FC = () => {
  return (
    <Layout
      showHeader={false}
      showFooter={false}
      showNav={false}
      title="Vendor profile page"
    >
      <VendorProfileHeader />
      <WhiteSpace size="xl" />
      <Tabs
        tabs={tabs}
        initialPage={1}
        tabBarUnderlineStyle={{ borderColor: color.primary, top: 0, bottom: 'inherit' }}
      >
        <Flex justify="center">
          <ServiceListing />
        </Flex>
        <Flex justify="center">
          <VendorReview />
        </Flex>
        <Flex justify="center">
          <VendorGallery />
        </Flex>
      </Tabs>    
    </Layout>
  )
}

export default VendorProfile