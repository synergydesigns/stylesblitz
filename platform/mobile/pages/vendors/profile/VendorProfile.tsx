import * as React from 'react';
import {
  Tabs,
  Flex,
} from 'antd-mobile';

import { P } from 'shared/components/Text';
import Layout from '../../layout';
import VendorProfileHeader from './VenderProfileHeader';
import ServiceListing from '../service/ServiceListing';

const tabs = [
  { title: <P size="14px" lineHeight="20px"> Service </P> },
  { title: <P size="14px" lineHeight="20px"> Shop </P> },
  { title: <P size="14px" lineHeight="20px"> Gallery </P> },
  { title: <P size="14px" lineHeight="20px"> About </P> },
];

const VendorProfile: React.FC = () => (
  <Layout
    showHeader={false}
    showFooter={false}
    showNav={false}
    title="Vendor profile page"
  >
    <VendorProfileHeader />
    <Tabs
      tabs={tabs}
      initialPage={1}
      tabBarUnderlineStyle={{ borderColor: '#F96A6A' }}
    >
      <Flex justify="center">
    <ServiceListing />
      </Flex>
      <Flex justify="center">
        <p>Shop</p>
      </Flex>
      <Flex justify="center">
        <p>Gallery</p>
      </Flex>
      <Flex justify="center">
        <p>About</p>
      </Flex>
    </Tabs>
  </Layout>
);

export default VendorProfile;
