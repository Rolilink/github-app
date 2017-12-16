import React from 'react';
import {
  Container,
  Header,
  Title,
  Body,
  Left,
  Right,
  Button,
  Icon,
} from 'native-base';
import { Link } from 'react-router-native';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import UserList from '../../../users/components/UserList';

export default class ContributorsListPage extends React.Component {
  static propTypes = {
    contributors: PropTypes.arrayOf(PropTypes.any).isRequired,
    isFetching: PropTypes.bool.isRequired,
    loadMoreContributors: PropTypes.func.isRequired,
  }

  get contributorsList() {
    const {
      contributors,
      isFetching,
      loadMoreContributors,
    } = this.props;

    if (contributors.length === 0) {
      return null;
    }

    return (
      <UserList
        users={contributors}
        isFetching={isFetching}
        loadMoreUsers={loadMoreContributors}
        mapUserToRow={(...args) => this.mapContributorToRow(...args)}
      />
    );
  }

  mapContributorToRow(owner) {
    return ({
      thumbnail: owner.avatar_url,
      title: owner.login,
      content: `${owner.contributions} contributions`,
    });
  }

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Link to="/">
                <Icon name="arrow-back" />
              </Link>
            </Button>
          </Left>
          <Body>
            <Title>Contributors</Title>
          </Body>
          <Right />
        </Header>
        <View>
          {this.contributorsList}
        </View>
      </Container>
    );
  }
}
