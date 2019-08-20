import React from 'react'
import MobileDetect from 'mobile-detect'
import { NextPageContext } from 'next'

import MobileIndex from '../platform/mobile/pages/index'

type Props = {
  userAgent: string
}

class Home extends React.Component <Props>{
  static async getInitialProps ({ req }: NextPageContext) {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
    return { userAgent }
  }

  render () {
    const md = new MobileDetect(this.props.userAgent)
    return md.mobile() ? <MobileIndex /> : <div>desktop</div>
  }
}

export default Home
