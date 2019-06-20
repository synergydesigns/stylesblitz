import * as React from 'react'

import Head from '../../shared/components/head'
import Hero from '../components/Hero'
import Header from '../components/Header'
import Services from '../components/ListItems/CarouselList'

const Home: React.SFC = () => (
  <>
    <Head title="homepage" />
    <Header />
    <Hero />
    <Services />
  </>
)

export default Home
