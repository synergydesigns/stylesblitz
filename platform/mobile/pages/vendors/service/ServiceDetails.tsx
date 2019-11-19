import * as React from 'react';
import Layout from '../../layout';
import ServiceDetailsHeader from './ServiceDetailsHeader';
import Service from './Service';

const ServiceDetails: React.FC = () => (
  <Layout
    showHeader={false}
    showFooter={false}
    showNav={false}
    title="Service Details"
  >
    <ServiceDetailsHeader />
    <Service />
  </Layout>
);

export default ServiceDetails;
