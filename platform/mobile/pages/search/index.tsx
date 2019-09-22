import React from 'react'

import Search from './Search'
import Layout from '../layout'

const SearchPage: React.FC = () => (
  <Layout title="Search" showHeader={false} showFooter={false} showNav={true}>
    <Search />
  </Layout>
)

export default SearchPage
