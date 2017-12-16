import { handleActions } from 'redux-actions';
import { SET_USER, SET_USERS, RESET_USERS_STATE } from './actionTypes';

const initialState = {
  byResourceUrl: {},
};

const reducer = handleActions({
  [SET_USER]: (state, { payload }) => ({
    ...state,
    byResourceUrl: { ...state.byResourceUrl, [payload.user.url]: payload.user },
  }),
  [SET_USERS]: (state, { payload }) => ({
    ...state,
    byResourceUrl: {
      ...state.byResourceUrl,
      ...payload.users.reduce(
        (tempState, user) => ({ ...tempState, [user.url]: user }),
        {},
      ),
    },
  }),
  [RESET_USERS_STATE]: () => initialState,
}, initialState);

export default reducer;
