import { createSelector } from 'reselect';

export const getContributorsState = state => state.repositories.contributors;

export const getNextLink = createSelector(
  getContributorsState,
  ({ links }) => links.next,
);

export const getContributorsUrls = createSelector(
  getContributorsState,
  ({ contributorsUrls }) => contributorsUrls,
);

export const isFetchingContributors = createSelector(
  getContributorsState,
  ({ isFetching }) => isFetching,
);
