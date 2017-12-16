import React from 'react';
import OwnersContainer from './containers/OwnersContainer';
import OwnersListPage from './components/OwnersListPage';

export default [
  {
    path: '/repos/owners/search/:q',
    render: ({ match }) => (
      <OwnersContainer q={match.params.q}>
        {props => <OwnersListPage {...props} />}
      </OwnersContainer>
    ),
  },
];
