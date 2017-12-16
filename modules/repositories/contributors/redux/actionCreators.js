import { createAction } from 'redux-actions';
import _ from 'lodash';
import * as Github from '../../../../libs/github';
import { FETCH_CONTRIBUTORS, RESET_CONTRIBUTORS_STATE } from './actionTypes';

export const fetchContributorsOfRepo = _.throttle(
  createAction(FETCH_CONTRIBUTORS, (...args) => Github.getRepositoryContributors(...args)),
  10000, // Throttle request every 10 secs to avoid rate-limiting
);
export const resetContributorsState = createAction(RESET_CONTRIBUTORS_STATE);
