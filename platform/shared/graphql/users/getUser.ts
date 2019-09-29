import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import { userData, userDataVariables } from '../../types/userData';

const GET_USER = gql`
  query userData($id: String!) {
    user(id: $id) {
      lastname
      firstname
      email
    }
  }
`;

const user = (id) => {
  const { loading, error, data } = useQuery<userData, userDataVariables>(
    GET_USER,
    { variables: { id } },
  );

  return [loading, data, error];
};

export default user;
