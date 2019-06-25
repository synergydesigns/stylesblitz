import gql from 'graphql-tag'
import { ApolloClient, NormalizedCacheObject } from 'apollo-boost';

export default (apolloClient: ApolloClient<NormalizedCacheObject>) =>
  apolloClient
    .query({
      query: gql`
        query getUser {
          user {
            id
            name
          }
        }
      `
    })
    .then(({ data }) => {
      return { loggedInUser: data }
    })
    .catch(() => {
      // Fail gracefully
      return { loggedInUser: {} }
    })