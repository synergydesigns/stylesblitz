import * as React from 'react'
import MobileDetect from 'mobile-detect'
import dynamic from 'next/dynamic';

const MobileVendor = dynamic(() => import('../../platform/mobile/pages/vendorProfile'));

interface Props {
  userAgent: string,
  params: Object,
  search: Object
}

const Vendor: React.FC<Props> = (props) => {
  const md = new MobileDetect(props.userAgent)

  return md.mobile() ? <MobileVendor /> : <div>desktop</div>
}

export default Vendor
