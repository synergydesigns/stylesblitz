import React from 'react'

import { Jumbotron } from '../components/Home'
import Head from '../components/head'

class Home extends React.Component {
  static async getInitialProps({ req }) {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
    return { userAgent }
  }

  render() {
    return (
      <div>
        <Head title="homepage" />
        <Jumbotron />
      </div>
    )
  }
}

export default Home


