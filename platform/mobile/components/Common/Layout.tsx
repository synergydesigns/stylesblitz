import React from 'react'

import Head from '../../../shared/components/head'

import Footer from './Footer'

type Props = {
  children: React.ReactNode
  title: string
}

const Layout: React.FC<Props> = ({ title, children, ...props }) => (
  <main>
    <Head title={title} />
    {children}
  </main>
)

export default Layout
