import React from 'react';
import { NativeModules } from 'react-native';
import { Provider } from 'react-redux';
import PromiseMiddleware from 'redux-promise-middleware';
import Router from './Router';
import routes from './routes';
import createStore from './Store';

NativeModules.DevSettings.setIsDebuggingRemotely(true); // uncomment to debug

const reducers = [() => ({})];
const store = createStore({ reducers, middlewares: [new PromiseMiddleware()] });

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router routes={routes} />
      </Provider>
    );
  }
}
