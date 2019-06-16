import React from 'react'
import MobileDetect from 'mobile-detect'
import PropTypes from 'prop-types'

import DesktopIndex from '../platform/desktop/pages/index'
import MobileIndex from '../platform/mobile/pages/index'

class Home extends React.Component {
  static async getInitialProps ({ req }) {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
    return { userAgent }
  }

  render () {
    const md = new MobileDetect(this.props.userAgent)
    return md.mobile()
      ? <MobileIndex />
      : <DesktopIndex />
  }
}

Home.propTypes = {
  userAgent: PropTypes.string.isRequired
}

export default Home
