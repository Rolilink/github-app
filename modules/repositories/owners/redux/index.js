import { searchOwnersOfReposMatchingQuery, resetOwnersState } from './actionCreators';
import * as actionTypes from './actionTypes';
import * as selectors from './selectors';
import reducer from './reducer';

export {
  searchOwnersOfReposMatchingQuery,
  resetOwnersState,
  selectors,
  actionTypes,
  reducer,
};

export default { name: 'owners', reducerFn: reducer };
