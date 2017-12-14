import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'remote-redux-devtools';

export default ({ state, reducers = {}, middlewares = [] }) => (
  createStore(
    combineReducers(reducers),
    state,
    composeWithDevTools(applyMiddleware(...middlewares)),
  )
);
