import { createSelector } from 'reselect';

export const getUsersState = state => state.users;
export const getUsers = createSelector(
  getUsersState,
  ({ byResourceUrl }) => byResourceUrl,
);
