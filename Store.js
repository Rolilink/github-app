import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

export default ({ reducers = {}, middlewares = [] }) => (
  createStore(
    combineReducers(reducers),
    composeWithDevTools(applyMiddleware(...middlewares)), //use this to debug
    //applyMiddleware(...middlewares)
  )
);
