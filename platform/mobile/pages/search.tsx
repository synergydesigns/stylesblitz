import React from 'react'

import Layout from './layout'
import Search from '../components/Search'

const SearchPage: React.FC = () => (
  <Layout title="Search" showHeader={false} showFooter={false} showNav={true}>
    <Search />
  </Layout>
)

export default SearchPage
