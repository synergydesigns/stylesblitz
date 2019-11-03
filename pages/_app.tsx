import React from 'react';
import App from 'next/app';

import { ApolloProvider } from 'react-apollo';
import { ApolloProvider as ApolloHooksProvider } from '@apollo/react-hooks';
import withApolloClient from '../lib/apollo.client';

export class MyApp extends App<any> {
  render() {
    const {
      Component,
      pageProps,
      apolloClient,
      query = { param: {}, search: {} },
      userAgent,
    } = this.props;

    return (
      <ApolloProvider client={apolloClient}>
        <ApolloHooksProvider client={apolloClient}>
          <Component
            {...pageProps}
            params={query.params}
            search={query.search}
            userAgent={userAgent}
          />
        </ApolloHooksProvider>
      </ApolloProvider>
    );
  }
}

export default withApolloClient(MyApp);
