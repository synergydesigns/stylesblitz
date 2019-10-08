import gql from 'graphql-tag';

export default gql`
  query userData($id: String!) {
    user(id: $id) {
      lastname
      firstname
      email
    }
  }
`;
