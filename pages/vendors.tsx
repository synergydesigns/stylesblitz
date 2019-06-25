import * as React from 'react'
import MobileDetect from 'mobile-detect'

import Mobile from '../platform/mobile/pages/vendors'

type Props = {
  userAgent: string,
  params: Object,
  search: Object
}

class Vendor extends React.Component <Props>{
  render () {
    const md = new MobileDetect(this.props.userAgent)
    return md.mobile() ? <Mobile /> : ''
  }
}

export default Vendor
