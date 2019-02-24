import React from 'react'

import HomeComponents from '../components/Home'
import Head from '../components/head'
import Common from '../components/Common'

class Home extends React.Component {
  static async getInitialProps({ req }) {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
    return { userAgent }
  }

  render() {
    return (
      <div>
        <Head title="homepage" />
        <HomeComponents.Jumbotron />
        <HomeComponents.Popular/>
        <HomeComponents.Featured/>
        <HomeComponents.Join/>
        <Common.Footer />
      </div>
    )
  }
}

export default Home


