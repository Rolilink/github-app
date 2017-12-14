import React from 'react';
import Router from './router';
import routes from './routes';

export default class App extends React.Component {
  render() {
    return (
      <Router routes={routes} />
    );
  }
}
