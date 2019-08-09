import * as React from 'react'

import  { FullPageGallery } from  '../components/Gallery'
import Layout from './layout'

const Gallery: React.FC = () => (
  <Layout
    showHeader={false}
    showFooter={false}
    showNav={false}
  >
    <FullPageGallery />
  </Layout>
)

export default Gallery