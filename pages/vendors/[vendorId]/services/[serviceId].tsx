import * as React from 'react';
import MobileDetect from 'mobile-detect';
import dynamic from 'next/dynamic';

const MobileServiceDetails = dynamic(() => import('../../../../platform/mobile/pages/vendors/service/ServiceDetails'));

interface Props {
  userAgent: string,
  params: Object,
  search: Object
}

const Vendor: React.FC<Props> = (props) => {
  const md = new MobileDetect(props.userAgent);
  return md.mobile() ? <MobileServiceDetails /> : <div>desktop</div>;
};

export default Vendor;
