import React from 'react';
import {
  Thumbnail,
  Left,
  Body,
  ListItem,
  Text,
} from 'native-base';
import PropTypes from 'prop-types';

export default class ProfileListItem extends React.PureComponent {
  static propTypes = {
    thumbnail: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }

  render() {
    const { thumbnail, title, content } = this.props;

    return (
      <ListItem avatar>
        <Left>
          <Thumbnail source={{ uri: thumbnail }} />
        </Left>
        <Body>
          <Text>{title}</Text>
          <Text note>{content}</Text>
        </Body>
      </ListItem>
    );
  }
}
