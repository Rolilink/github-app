import React from 'react';
import { FlatList, View } from 'react-native';
import PropTypes from 'prop-types';

export default class InfiniteList extends React.Component {
  static propTypes = {
    rows: PropTypes.arrayOf(PropTypes.any).isRequired,
    renderRow: PropTypes.func.isRequired,
    shouldLoadMoreItems: PropTypes.bool,
    loadNextItems: PropTypes.func.isRequired,
  }

  static defaultProps = {
    shouldLoadMoreItems: false,
  }

  constructor() {
    super();
    this.y = 0;
  }

  onScroll({ nativeEvent }) {
    const { contentOffset } = nativeEvent;
    const { y } = contentOffset;

    if (y > this.y) {
      this.maybeLoadNextItems();
    }

    this.y = y;
  }

  get rows() {
    return this.props.rows;
  }

  maybeLoadNextItems() {
    if (this.props.shouldLoadMoreItems) {
      this.props.loadNextItems();
    }
  }

  renderRow(row) {
    return this.props.renderRow(row);
  }


  render() {
    return (
      <View>
        <FlatList
          data={this.rows}
          renderItem={(...args) => this.renderRow(...args)}
          onScroll={(...args) => this.onScroll(...args)}
          keyExtractor={(item, index) => `listItem-${index}`}
        />
      </View>
    );
  }
}
