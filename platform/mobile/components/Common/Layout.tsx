import React from 'react'

import Head from '../../../shared/components/head'

import Footer from './Footer'

type Props = {
  children: React.ReactNode
  title: string
  showFooter: boolean
}

const Layout: React.FC<Props> = ({ title, children, ...props }) => (
  <>
    <Head title={title} />
    {children}
    {props.showFooter && <Footer />}
  </>
)

Layout.defaultProps = {
  showFooter: true
}

export default Layout
