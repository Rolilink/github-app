import { handleActions } from 'redux-actions';
import {
  FETCH_CONTRIBUTORS_SUCCESS,
  FETCH_CONTRIBUTORS_LOADING,
  FETCH_CONTRIBUTORS_ERROR,
  RESET_CONTRIBUTORS_STATE,
} from './actionTypes';

const initialState = {
  isFetching: false,
  error: null,
  contributorsUrls: [],
  links: {},
};


const reducer = handleActions({
  [FETCH_CONTRIBUTORS_SUCCESS]: (state, { payload }) => ({
    ...state,
    isFetching: false,
    contributorsUrls: [
      ...state.contributorsUrls,
      ...payload.contributors.map(contributor => contributor.url),
    ],
    links: payload.links,
  }),
  [FETCH_CONTRIBUTORS_ERROR]: (state, { payload }) => ({
    ...state,
    error: payload.error,
    isFetching: false,
  }),
  [FETCH_CONTRIBUTORS_LOADING]: state => ({
    ...state,
    error: null,
    isFetching: true,
  }),
  [RESET_CONTRIBUTORS_STATE]: () => initialState,
}, initialState);

export default reducer;
