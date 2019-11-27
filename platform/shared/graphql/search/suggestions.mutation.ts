import gql from 'graphql-tag';

const ADD_SUGGESTIONS = gql`
  mutation addSuggestions($name: String!) {
    addTodo(name: $name) @client
  }
`;

export default ADD_SUGGESTIONS;
