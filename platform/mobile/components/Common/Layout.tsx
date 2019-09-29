import React from 'react';

import Head from '../../../shared/components/head';

interface Props {
  children: React.ReactNode
  title: string
}

const Layout: React.FC<Props> = ({ title, children }) => (
  <main>
    <Head title={title} />
    {children}
  </main>
);

export default Layout;
