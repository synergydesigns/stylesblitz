import * as React from 'react'
import MobileDetect from 'mobile-detect'
import { NextPageContext } from 'next'

import MobileSearch from '../platform/mobile/pages/search'

type Props = {
  userAgent: string
}

class Search extends React.Component <Props>{
  static async getInitialProps ({ req }: NextPageContext) {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
    return { userAgent }
  }

  render () {
    const md = new MobileDetect(this.props.userAgent)
    return md.mobile() ? <MobileSearch /> : <div>desktop</div>
  }
}

export default Search
