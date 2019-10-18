import gql from 'graphql-tag';

export default gql`
  query searchServices($name: String!) {
    searchServices(
      name: $name,
    ) {
      ID
      price
      name
      rating
      lat
      lng
    }
  }
`;
