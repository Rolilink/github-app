import React from 'react';
import PropTypes from 'prop-types';
import InfiniteList from '../../common/components/InfiniteList';
import ProfileListItem from '../../common/components/ProfileListItem';
import LoadingListItem from '../../common/components/LoadingListItem';

// NOTE: This can be decoupled more using HOC withUsers, withLoading

export default class UserList extends React.Component {
  static propTypes = {
    users: PropTypes.arrayOf(PropTypes.any).isRequired,
    loadMoreUsers: PropTypes.func.isRequired,
    mapUserToRow: PropTypes.func.isRequired,
    isFetching: PropTypes.bool,
  }

  static defaultProps = {
    isFetching: false,
  }

  get rowsFromUsers() {
    const rows = [];

    this.props.users.map(user => (
      rows.push({ type: 'user', user })
    ));

    if (this.props.isFetching) {
      rows.push({ type: 'loading' });
    }

    return rows;
  }

  renderRow(row) {
    return row.item.type === 'user' ? this.renderListItemFromUser(row.item.user) : this.renderLoadingIndicator(row);
  }

  renderListItemFromUser(user) {
    const { thumbnail, title, content } = this.props.mapUserToRow(user);

    return (
      <ProfileListItem {...{ thumbnail, title, content }} />
    );
  }

  renderLoadingIndicator() {
    return (
      <LoadingListItem />
    );
  }

  render() {
    return (
      <InfiniteList
        rows={this.rowsFromUsers}
        renderRow={(...args) => this.renderRow(...args)}
        shouldLoadMoreItems={!this.props.isFetching}
        loadNextItems={(...args) => this.props.loadMoreUsers(...args)}
      />
    );
  }
}
