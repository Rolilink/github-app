import { createSelector } from 'reselect';

export const getOwnersState = state => state.repositories.owners;

export const getNextLink = createSelector(
  getOwnersState,
  ({ links }) => links.next,
);

export const getOwnersUrls = createSelector(
  getOwnersState,
  ({ ownersUrls }) => ownersUrls,
);

export const isFetchingOwners = createSelector(
  getOwnersState,
  ({ isFetching }) => isFetching,
);
