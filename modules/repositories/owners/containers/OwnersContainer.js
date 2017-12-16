import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import PropTypes from 'prop-types';

import {
  searchOwnersOfReposMatchingQuery,
  resetOwnersState,
  selectors as ownersSelectors,
} from '../redux';

import {
  addUsers,
  resetUsersState,
  selectors as usersSelectors,
} from '../../../users/redux';

const { getOwnersUrls, isFetchingOwners, getNextLink } = ownersSelectors;
const { getUsers } = usersSelectors;

const mapDispatchToProps = {
  searchOwnersOfReposMatchingQuery,
  resetOwnersState,
  resetUsersState,
  addUsers,
};

const mapStateToProps = (state, props) => {
  const { q } = props;
  const isFetching = isFetchingOwners(state);
  const nextPage = getNextLink(state);
  const ownersUrls = getOwnersUrls(state);
  const users = getUsers(state);
  const owners = _.filter(users, user => _.find(ownersUrls, url => user.url === url));

  return {
    nextPage,
    q,
    isFetching,
    owners,
  };
};

class OwnersContainer extends React.Component {
  static propTypes = {
    q: PropTypes.string.isRequired,
    owners: PropTypes.arrayOf(PropTypes.any).isRequired,
    isFetching: PropTypes.bool,
    nextPage: PropTypes.string,
    searchOwnersOfReposMatchingQuery: PropTypes.func.isRequired,
    addUsers: PropTypes.func.isRequired,
    resetUsersState: PropTypes.func.isRequired,
    resetOwnersState: PropTypes.func.isRequired,
    children: PropTypes.func.isRequired,
  }

  static defaultProps = {
    isFetching: false,
    nextPage: null,
  }

  componentWillMount() {
    this.maybeFetchOwners();
  }

  componentWillUnmount() {
    this.props.resetUsersState();
    this.props.resetOwnersState();
  }

  maybeFetchOwners() {
    const {
      q,
      isFetching,
      nextPage,
      owners,
    } = this.props;

    if (isFetching) {
      return null;
    }

    if (nextPage) {
      this.fetchOwners({ searchUrl: nextPage });
      return null;
    }

    if (!nextPage && owners.length > 0) {
      return null;
    }

    return this.fetchOwners({ q: `${q} in:name` });
  }

  fetchOwners(...args) {
    return this.props.searchOwnersOfReposMatchingQuery(...args)
      .then(({ value }) => {
        this.props.addUsers(value.owners);
      });
  }

  render() {
    const {
      isFetching,
      owners,
      children,
    } = this.props;

    return (
      children({
        isFetching,
        owners,
        loadMoreOwners: (...args) => this.maybeFetchOwners(...args),
      })
    );
  }
}

export const component = OwnersContainer;

export default connect(mapStateToProps, mapDispatchToProps)(OwnersContainer);
