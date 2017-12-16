import { createAction } from 'redux-actions';
import _ from 'lodash';
import * as Github from '../../../../libs/github';
import { SEARCH_OWNERS, RESET_OWNERS_STATE } from './actionTypes';

export const searchOwnersOfReposMatchingQuery = _.throttle(createAction(
  SEARCH_OWNERS,
  (...args) => Github.searchRepositoryOwnersByQuery(...args),
), 6000); // throttle 6 seconds to avoid 10 req per min rate-limiting
export const resetOwnersState = createAction(RESET_OWNERS_STATE);
