import * as React from 'react'

import Hero from '../components/Hero'
import HomeVendorHero from '../components/Hero/HomeVendor'
import Header from '../components/Header'
import CarouselList from '../components/ListItems/CarouselList'
import Layout from '../components/Common/Layout'


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

const services = {
  itemWidth: 270,
  itemHeight: 250,
  headerText: 'services',
  itemsCount: 108,
  marginTop: 120,
  showBorder: true,
  items: [
    {
      name: 'nail polish',
      subHeader: '32 vendors',
      image: '/static/images/thumbnail/cream.jpg'
    },
    {
      name: 'facial treatment',
      subHeader: '11 vendors',
      image: '/static/images/thumbnail/nails.jpg'
    },
    {
      name: 'madonna spa',
      subHeader: '67 vendors',
      image: '/static/images/thumbnail/cream.jpg'
    },
    {
      name: 'massage',
      subHeader: '30 vendors',
      image: '/static/images/thumbnail/nails.jpg'
    },
    {
      name: 'hair grooming',
      subHeader: '18 vendors',
      image: '/static/images/thumbnail/cream.jpg'
    },
  ]
}


const Home: React.FC = () => (
  <>
    <Layout title="homepage">
      <Header />
      <Hero />
      <CarouselList { ...services } />
      <CarouselList { ...popular } />
      <CarouselList { ...categories } />
      <HomeVendorHero />
    </Layout>
  </>
)

export default Home
