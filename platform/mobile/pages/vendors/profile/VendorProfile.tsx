import * as React from 'react';
import {
  Tabs,
  WhiteSpace,
  Flex,
} from 'antd-mobile';

import { color } from 'shared/global';
import * as Icon from 'shared/icons';

import Layout from '../../layout';
import VendorProfileHeader from './VenderProfileHeader';
import ServiceListing from '../service/ServiceListing';
import VendorGallery from '../gallery/VendorGallery';
import VendorReview from '../reviews/VendorReview';

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
);

export default VendorProfile;
