import { fetchContributorsOfRepo, resetContributorsState } from './actionCreators';
import * as actionTypes from './actionTypes';
import * as selectors from './selectors';
import reducer from './reducer';

export {
  fetchContributorsOfRepo,
  resetContributorsState,
  selectors,
  actionTypes,
  reducer,
};

export default { name: 'contributors', reducerFn: reducer };
