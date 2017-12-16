import React from 'react';
import { NativeRouter, Switch, Route } from 'react-router-native';
import PropTypes from 'prop-types';

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
        <Switch>
          {this.routes}
        </Switch>
      </NativeRouter>
    );
  }
}

export default Router;
