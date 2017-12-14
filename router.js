import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NativeRouter, Route } from 'react-router-native';
import { Container } from 'native-base';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

class Router extends React.Component {
  static propTypes = {
    routes: PropTypes.arrayOf(PropTypes.any),
  }

  static defaultProps = {
    routes: [],
  }

  get routes() {
    return (
      this.props.routes.map(route => <Route exact key={`route-${route.path}`} path={route.path} render={route.render} />)
    );
  }

  render() {
    return (
      <NativeRouter>
        <Container>
          {this.routes}
        </Container>
      </NativeRouter>
    );
  }
}

export default Router;
