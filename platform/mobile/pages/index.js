import React from 'react'

import Head from '../../shared/components/head'
import Hero from '../components/Hero'
import Header from '../components/Header'

class Home extends React.Component {
  render () {
    return (
      <>
        <Head title="homepage" />
        <Header />
        <Hero />
      </>
    )
  }
}

export default Home
