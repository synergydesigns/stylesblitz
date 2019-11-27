
import merge from 'lodash.merge';

// import userResolver from './user/user.resolver';
import todoResolver from './todos/todos.resolver'; // basic example. will be removed later

export default merge(
  // userResolver,
  todoResolver,
);
