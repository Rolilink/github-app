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

export default class OwnersListPage extends React.Component {
  static propTypes = {
    owners: PropTypes.arrayOf(PropTypes.any).isRequired,
    isFetching: PropTypes.bool.isRequired,
    loadMoreOwners: PropTypes.func.isRequired,
  }

  get ownersList() {
    const {
      owners,
      isFetching,
      loadMoreOwners,
    } = this.props;

    if (owners.length === 0) {
      return null;
    }

    return (
      <UserList
        users={owners}
        isFetching={isFetching}
        loadMoreUsers={loadMoreOwners}
        mapUserToRow={(...args) => this.mapOwnerToRow(...args)}
      />
    );
  }

  mapOwnerToRow(owner) {
    return ({
      thumbnail: owner.avatar_url,
      title: owner.login,
      content: owner.repo,
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
            <Title>Owners</Title>
          </Body>
          <Right />
        </Header>
        <View>
          {this.ownersList}
        </View>
      </Container>
    );
  }
}
