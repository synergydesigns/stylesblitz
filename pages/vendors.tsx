import * as React from 'react'
import MobileDetect from 'mobile-detect'
import dynamic from 'next/dynamic';

const MobileVendor = dynamic(() => import('../platform/mobile/pages/vendorProfile'));

type Props = {
  userAgent: string,
  params: Object,
  search: Object
}

class Vendor extends React.Component <Props>{
  render () {
    const md = new MobileDetect(this.props.userAgent)
    return md.mobile() ? <MobileVendor /> : ''
  }
}

export default Vendor
