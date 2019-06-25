import React from 'react'
import App, { Container } from 'next/app'

import withApolloClient from '../lib/apollo.client'

import { ApolloProvider } from 'react-apollo'

export class MyApp extends App<any> {
  render () {
    const { Component, pageProps, apolloClient } = this.props
    return (
      <Container>
        <ApolloProvider client={apolloClient}>
          <Component {...pageProps} />
        </ApolloProvider>
      </Container>
    )
  }
}

export default withApolloClient(MyApp)