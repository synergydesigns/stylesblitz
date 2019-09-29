import React from 'react';
import cookie from 'cookie';
import { getDataFromTree } from 'react-apollo';
import Head from 'next/head';
import { NextPageContext } from 'next';
import { ApolloClient, NormalizedCacheObject } from 'apollo-boost';
import { AppContext } from 'next/app';

import initApollo from './init.apollo';
// eslint-disable-next-line import/no-named-as-default
import isBrowser from './isBrowser';

function parseCookies(req?: any, options = {}) {
  return cookie.parse(req ? req.headers.cookie || '' : document.cookie, options);
}

interface CustomContext extends NextPageContext {
  apolloClient: ApolloClient<NormalizedCacheObject>
}

interface CustomNextContext extends AppContext {
  ctx: CustomContext
}

export default (App: any) => class WithData extends React.Component {
    static displayName = `WithData(${App.displayName})`

    static async getInitialProps(ctx: CustomNextContext) {
      const {
        Component,
        router,
        ctx: { req, res, query },
      } = ctx;
      const apollo = initApollo(
        {},
        {
          getToken: () => parseCookies(req).token,
        },
      );

      ctx.ctx.apolloClient = apollo;

      let appProps = {};
      if (App.getInitialProps) {
        appProps = await App.getInitialProps(ctx);
      }

      if (res && res.finished) {
        // When redirecting, the response is finished.
        // No point in continuing to render
        return {};
      }

      if (!isBrowser) {
        // Run all graphql queries in the component tree
        // and extract the resulting data
        try {
          // Run all GraphQL queries
          await getDataFromTree(
            <App
              {...appProps}
              Component={Component}
              router={router}
              apolloClient={apollo}
            />,
          );
        } catch (error) {
          // Prevent Apollo Client GraphQL errors from crashing SSR.
          // Handle them in components via the data.error prop:
          // https://www.apollographql.com/docs/react/api/react-apollo.html#graphql-query-data-error
          // eslint-disable-next-line no-console
          console.error('Error while running `getDataFromTree`', error);
        }

        // getDataFromTree does not call componentWillUnmount
        // head side effect therefore need to be cleared manually
        Head.rewind();
      }

      // Extract query data from the Apollo's store
      const apolloState = apollo.cache.extract();
      const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;

      return {
        ...appProps,
        apolloState,
        query,
        userAgent,
      };
    }

    apolloClient: ApolloClient<NormalizedCacheObject> | null = null

    constructor(props: any) {
      super(props);
      // `getDataFromTree` renders the component first, the client is passed off as a property.
      // After that rendering is done using Next's normal rendering pipeline
      this.apolloClient = initApollo(props.apolloState, {
        getToken: () => parseCookies().token,
      });
    }

    render() {
      return <App {...this.props} apolloClient={this.apolloClient} />;
    }
};
