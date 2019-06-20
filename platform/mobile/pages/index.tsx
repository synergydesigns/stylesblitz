import * as React from 'react'

import Head from '../../shared/components/head'
import Hero from '../components/Hero'
import Header from '../components/Header'
import CarouselList from '../components/ListItems/CarouselList'


const items = [
  {
    name: 'nail polish',
    subHeader: '12th Street, Bode Thomas, Lagos.',
    image: '/static/images/thumbnail/legs.jpg'
  },
  {
    name: 'facial treatment',
    subHeader: 'Mombasa house, Allen Avenue, Ikeja, Lagos',
    image: '/static/images/thumbnail/lady.jpg'
  },
  {
    name: 'madonna spa',
    subHeader: '12th Street, Bode Thomas, Lagos.',
    image: '/static/images/thumbnail/legs.jpg'
  },
  {
    name: 'massage',
    subHeader: 'Mombasa house, Allen Avenue, Ikeja, Lagos',
    image: '/static/images/thumbnail/lady.jpg'
  },
  {
    name: 'hair grooming',
    subHeader: '12th Street, Bode Thomas, Lagos.',
    image: '/static/images/thumbnail/legs.jpg'
  },
]

const categories = {
  itemWidth: 320,
  itemHeight: 250,
  headerText: 'popular vendors',
  itemsCount: 108,
  items,
  marginTop: 40,
  showBorder: false
}

const popular = {
  itemWidth: 320,
  itemHeight: 250,
  headerText: 'categories',
  itemsCount: 108,
  items,
  marginTop: 30,
  showBorder: true
}


const Home: React.SFC = () => (
  <>
    <Head title="homepage" />
    <Header />
    <Hero />
    <CarouselList />
    <CarouselList { ...popular } />
    <CarouselList { ...categories } />
  </>
)

export default Home
