import * as React from 'react'

import FullPageGallery from  './FullPageGallery'
import Layout from '../layout'

const Gallery: React.FC = () => (
  <Layout
    showHeader={false}
    showFooter={false}
    showNav={false}
    title="Gallery"
  >
    <FullPageGallery />
  </Layout>
)

export default Gallery