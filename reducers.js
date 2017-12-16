import usersReducer from './modules/users/redux';
import repositoriesReducer from './modules/repositories/redux';

const reducers = {
  [usersReducer.name]: usersReducer.reducerFn,
  [repositoriesReducer.name]: repositoriesReducer.reducerFn,
};

export default reducers;
