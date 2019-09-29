import React, { Fragment } from 'react';

import Layout from '../components/Common/Layout';
import { MainWrapper, HeaderSpace } from './styles/MobileGlobalStyle';
import Header from '../components/Header';
import NavBar from '../components/Common/NavBar';
import Footer from '../components/Common/Footer';

interface Props {
  showFooter?: boolean
  showHeader?: boolean
  showNav?: boolean
  children: React.ReactNode
  title: string
}

const MobileLayout: React.FC<Props> = ({ children, ...props }) => (
  <Layout title={props.title}>
    { props.showHeader && (
      <Fragment>
        <Header />
        <HeaderSpace />
      </Fragment>
    )
      }
    <MainWrapper>
      {children}
      {props.showFooter && <Footer />}
    </MainWrapper>
    {props.showNav && <NavBar />}
  </Layout>
);

MobileLayout.defaultProps = {
  showFooter: true,
  showHeader: true,
  showNav: true,
};

export default MobileLayout;
