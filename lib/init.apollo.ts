/* eslint-disable import/no-named-as-default */
/* eslint-disable global-require */
import { ApolloClient, InMemoryCache, NormalizedCacheObject } from 'apollo-boost';
import { setContext } from 'apollo-link-context';
import { createHttpLink } from 'apollo-link-http';
import isoFetch from 'isomorphic-unfetch';

import resolvers from 'platform/shared/graphql/resolvers';
import typeDefs from 'platform/shared/graphql/definitions';
import defaults from 'platform/shared/graphql/defaults';
import isBrowser from './isBrowser';

let apolloClient: ApolloClient<NormalizedCacheObject> | null = null;

interface Options {
getToken: () => string
  fetchOptions?: any
}

function create(initialState: any, { getToken }: Options) {
  const httpLink = createHttpLink({
    uri: 'http://127.0.0.1:4002/graphql',
    fetch: isBrowser ? fetch : isoFetch,
  });

  const authLink = setContext(() => {
    const token = getToken();
    return {
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };
  });

  const cache = new InMemoryCache();

  const client = new ApolloClient({
    connectToDevTools: true,
    ssrMode: !isBrowser, // Disables forceFetch on the server (so queries are only run once)
    link: authLink.concat(httpLink),
    cache,
    resolvers,
    typeDefs,
  });

  cache.writeData({ data: defaults });

  client.onResetStore(() => {
    cache.writeData({ data: defaults });
    return Promise.resolve();
  });

  return client;
}

export default function initApollo(initialState: any, options: Options) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!isBrowser) {
    let fetchOptions = {};
    // If you are using a https_proxy, add fetchOptions with 'https-proxy-agent' agent instance
    // 'https-proxy-agent' is required here because it's a sever-side only module
    if (process.env.https_proxy) {
      fetchOptions = {
        agent: new (require('https-proxy-agent'))(process.env.https_proxy),
      };
    }

    return create(initialState, {
      ...options,
      fetchOptions,
    });
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = create(initialState, options);
    if (isBrowser) {
      // eslint-disable-next-line no-underscore-dangle
      (window as any).__APOLLO_CLIENT__ = apolloClient;
    }
  }

  return apolloClient;
}
