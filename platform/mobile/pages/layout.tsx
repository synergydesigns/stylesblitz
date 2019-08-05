import React, { Fragment } from 'react'

import Layout from '../components/Common/Layout'
import  { MainWrapper, HeaderSpace } from './styles/MobileGlobalStyle'
import Header from '../components/Header'
import NavBar from '../components/Common/NavBar'

interface Props {
  showFooter: boolean
  showHeader: boolean
  showNav: boolean
}

const MobileLayout: React.FC<Props> = ({ children, ...props }) => {
  return (
    <Layout showHeader={props.showHeader} showFooter={props.showFooter}>
      { props.showHeader && (
          <Fragment>
            <Header />
            <HeaderSpace/>
          </Fragment>
        ) 
      }
      <MainWrapper>
        {children}
      </MainWrapper>
      {props.showNav && <NavBar />}
    </Layout>
  )
}

MobileLayout.defaultProps = {
  showFooter: true,
  showHeader: true,
  showNav: true
}

export default MobileLayout
