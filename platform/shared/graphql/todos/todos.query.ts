import gql from 'graphql-tag';

export default gql`
 {
  todos @client {
    id,
    name,
    completed,
    __typename
  }
}`;
