import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';

import ADD_TODO from 'shared/graphql/todos/todos.mutation';
import GET_TODO from 'shared/graphql/todos/todos.query';

const Todo = () => {
  const data = useQuery(GET_TODO);
  const [addTodo] = useMutation(ADD_TODO);
  const [todo, setTodo] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo({ variables: { name: 'todo' } });
    setTodo('');
  };

  if (data.loading) {
    return <p>loading</p>;
  }

  return (
    <div style={{ marginBottom: '20px' }}>
      {data.data.todos.map(({ name, id }) => <p key={id}>{name}</p>)}
      <form onSubmit={onSubmit}>
        <input value={todo} onChange={event => setTodo(event.target.value)} />
        <button type="submit">add todo</button>
      </form>
    </div>
  );
};


const Todos = () => (
  <div>
    <Todo />
    <Todo />
  </div>
);

export default Todos;
