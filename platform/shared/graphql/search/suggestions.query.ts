import gql from 'graphql-tag';

export default gql`
  query suggestions($query: String!) {
    getSuggestions(query: $query ) {
      type
      query,
      url
    }
  }
`;

export const getLocalSuggestions = gql`
  suggestions @client {
    type,
    querr,
    url
  }
`;
