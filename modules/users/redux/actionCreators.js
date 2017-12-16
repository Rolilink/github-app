import { createAction } from 'redux-actions';
import { SET_USER, SET_USERS, RESET_USERS_STATE } from './actionTypes';

export const addUser = createAction(SET_USER, user => ({ user }));
export const addUsers = createAction(SET_USERS, users => ({ users }));
export const resetUsersState = createAction(RESET_USERS_STATE);
