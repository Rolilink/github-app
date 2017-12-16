import React from 'react';
import {
  ListItem,
  Spinner,
  Body,
} from 'native-base';
import PropTypes from 'prop-types';

export default class LoadingListItem extends React.PureComponent {
  static propTypes = {
    key: PropTypes.string,
  }

  static defaultProps = {
    key: '',
  }

  render() {
    return (
      <ListItem key={this.props.key}>
        <Body>
          <Spinner />
        </Body>
      </ListItem>
    );
  }
}
