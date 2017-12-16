import { addUser, addUsers, resetUsersState } from './actionCreators';
import * as actionTypes from './actionTypes';
import * as selectors from './selectors';
import reducer from './reducer';

export {
  addUser,
  addUsers,
  resetUsersState,
  selectors,
  actionTypes,
  reducer,
};

export default { name: 'users', reducerFn: reducer };
