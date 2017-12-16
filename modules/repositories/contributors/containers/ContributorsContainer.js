import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import PropTypes from 'prop-types';

import {
  fetchContributorsOfRepo,
  resetContributorsState,
  selectors as contributorsSelectors,
} from '../redux';

import {
  addUsers,
  resetUsersState,
  selectors as usersSelectors,
} from '../../../users/redux';

const { getContributorsUrls, isFetchingContributors, getNextLink } = contributorsSelectors;
const { getUsers } = usersSelectors;

const mapDispatchToProps = {
  fetchContributorsOfRepo,
  resetContributorsState,
  resetUsersState,
  addUsers,
};

const mapStateToProps = (state, props) => {
  const { repo } = props;
  const isFetching = isFetchingContributors(state);
  const nextPage = getNextLink(state);
  const contributorsUrls = getContributorsUrls(state);
  const users = getUsers(state);
  const contributors = _.filter(users, user => _.find(contributorsUrls, url => user.url === url));

  return {
    nextPage,
    repo,
    isFetching,
    contributors,
  };
};

class ContributorsContainer extends React.Component {
  static propTypes = {
    repo: PropTypes.shape({
      owner: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
    contributors: PropTypes.arrayOf(PropTypes.any).isRequired,
    isFetching: PropTypes.bool,
    nextPage: PropTypes.string,
    fetchContributorsOfRepo: PropTypes.func.isRequired,
    addUsers: PropTypes.func.isRequired,
    resetUsersState: PropTypes.func.isRequired,
    resetContributorsState: PropTypes.func.isRequired,
    children: PropTypes.func.isRequired,
  }

  static defaultProps = {
    isFetching: false,
    nextPage: null,
  }

  componentWillMount() {
    this.maybeFetchContributors();
  }

  componentWillUnmount() {
    this.props.resetUsersState();
    this.props.resetContributorsState();
  }

  maybeFetchContributors() {
    const {
      repo,
      isFetching,
      nextPage,
      contributors,
    } = this.props;

    if (isFetching) {
      return null;
    }

    if (nextPage) {
      this.fetchContributors({ resourceUrl: nextPage });
      return null;
    }

    if (!nextPage && contributors.length > 0) {
      return null;
    }

    return this.fetchContributors({ repo });
  }

  fetchContributors(...args) {
    return this.props.fetchContributorsOfRepo(...args)
      .then(({ value }) => {
        this.props.addUsers(value.contributors);
      });
  }

  render() {
    const {
      repo,
      isFetching,
      contributors,
      children,
    } = this.props;

    return (
      children({
        repo,
        isFetching,
        contributors,
        loadMoreContributors: (...args) => this.maybeFetchContributors(...args),
      })
    );
  }
}

export const component = ContributorsContainer;

export default connect(mapStateToProps, mapDispatchToProps)(ContributorsContainer);
