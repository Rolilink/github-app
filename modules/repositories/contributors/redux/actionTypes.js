import { PENDING, FULFILLED, REJECTED } from 'redux-promise-middleware';

export const FETCH_CONTRIBUTORS = 'aurity/github-app/repositories/contributors/FETCH';
export const FETCH_CONTRIBUTORS_SUCCESS = `${FETCH_CONTRIBUTORS}_${FULFILLED}`;
export const FETCH_CONTRIBUTORS_ERROR = `${FETCH_CONTRIBUTORS}_${REJECTED}`;
export const FETCH_CONTRIBUTORS_LOADING = `${FETCH_CONTRIBUTORS}_${PENDING}`;

export const RESET_CONTRIBUTORS_STATE = 'aurity/github-app/repositories/contributors/RESET';
