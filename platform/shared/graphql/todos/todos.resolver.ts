
import query from './todos.query';

const addTodo = (_root, variables, { cache }) => {
  const data = cache.readQuery({ query });

  const todo = {
    id: (data.todos.length + 1).toString(),
    name: variables.name,
    completed: false,
    __typename: 'TodoItem',
  };

  cache.writeData({
    query,
    data: { todos: [...data.todos, todo] },
  });
};

export default {
  Mutation: {
    addTodo,
  },
};
