import React from 'react'
import App, { Container } from 'next/app'

import withApolloClient from '../lib/apollo.client'

import { ApolloProvider } from 'react-apollo'

export class MyApp extends App<any> {
  render () {
    const {
      Component,
      pageProps,
      apolloClient,
      query = { param: {}, search: {}},
      userAgent
    } = this.props

    return (
      <Container>
        <ApolloProvider client={apolloClient}>
          <Component
            {...pageProps}
            params={query.params}
            search={query.search}
            userAgent={userAgent}
          />
        </ApolloProvider>
      </Container>
    )
  }
}

export default withApolloClient(MyApp)