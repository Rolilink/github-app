import { handleActions } from 'redux-actions';
import {
  SEARCH_OWNERS_SUCCESS,
  SEARCH_OWNERS_LOADING,
  SEARCH_OWNERS_ERROR,
  RESET_OWNERS_STATE,
} from './actionTypes';

const initialState = {
  isFetching: false,
  error: null,
  ownersUrls: [],
  links: {},
};


const reducer = handleActions({
  [SEARCH_OWNERS_SUCCESS]: (state, { payload }) => ({
    ...state,
    isFetching: false,
    ownersUrls: [
      ...state.ownersUrls,
      ...payload.owners.map(owner => owner.url),
    ],
    links: payload.links,
  }),
  [SEARCH_OWNERS_ERROR]: (state, { payload }) => ({
    ...state,
    error: payload.error,
    isFetching: false,
  }),
  [SEARCH_OWNERS_LOADING]: state => ({
    ...state,
    error: null,
    isFetching: true,
  }),
  [RESET_OWNERS_STATE]: () => initialState,
}, initialState);

export default reducer;
