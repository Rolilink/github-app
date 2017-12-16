import React from 'react';
import ContributorsContainer from './containers/ContributorsContainer';
import ContributorsListPage from './components/ContributorsListPage';

export default [
  {
    path: '/repos/contributors/:owner/:name',
    render: ({ match }) => (
      <ContributorsContainer repo={{ owner: match.params.owner, name: match.params.name }}>
        {props => <ContributorsListPage {...props} />}
      </ContributorsContainer>
    ),
  },
];
