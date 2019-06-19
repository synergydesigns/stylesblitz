import * as React from 'react'

import Head from '../../shared/components/head'
import Hero from '../components/Hero'
import Header from '../components/Header'

const Home: React.SFC = () => (
  <>
    <Head title="homepage" />
    <Header />
    <Hero />
  </>
)

export default Home
