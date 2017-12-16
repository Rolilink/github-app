import { PENDING, FULFILLED, REJECTED } from 'redux-promise-middleware';

export const SEARCH_OWNERS = 'aurity/github-app/repositories/owners/SEARCH';
export const SEARCH_OWNERS_SUCCESS = `${SEARCH_OWNERS}_${FULFILLED}`;
export const SEARCH_OWNERS_ERROR = `${SEARCH_OWNERS}_${REJECTED}`;
export const SEARCH_OWNERS_LOADING = `${SEARCH_OWNERS}_${PENDING}`;

export const RESET_OWNERS_STATE = 'aurity/github-app/repositories/owners/RESET';
