import gql from 'graphql-tag';

const ADD_TODO = gql`
  mutation addTodo($name: String!) {
    addTodo(name: $name) @client
  }
`;

export default ADD_TODO;
