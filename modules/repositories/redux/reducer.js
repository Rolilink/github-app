import { combineReducers } from 'redux';
import contributorsReducer from '../contributors/redux';
import ownersReducer from '../owners/redux';

const reducer = combineReducers({
  [contributorsReducer.name]: contributorsReducer.reducerFn,
  [ownersReducer.name]: ownersReducer.reducerFn,
});


export default reducer;
