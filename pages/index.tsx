import React from 'react'
import MobileDetect from 'mobile-detect'

import MobileIndex from '../platform/mobile/pages/index'

type Props = {
  userAgent?: string
}

class Home extends React.Component <Props>{
  static async getInitialProps ({ req }) {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
    return { userAgent }
  }

  render () {
    // const md = new MobileDetect(this.props.userAgent)
    return <MobileIndex />
  }
}

export default Home
