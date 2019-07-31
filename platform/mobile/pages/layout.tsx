import React from 'react'

import Layout from '../components/Common/Layout'
import  { MainWrapper } from './styles/MobileGlobalStyle'
import Header from '../components/Header'

const MobileLayout: React.FC = ({ children }) => {
  return (
    <Layout>
      <Header />
      <MainWrapper>
        {children}
      </MainWrapper>
    </Layout>
  )
}

export default MobileLayout
