import React from 'react';
import { NativeModules } from 'react-native';
import { Provider } from 'react-redux';
import PromiseMiddleware from 'redux-promise-middleware';
import Expo from 'expo';
import Router from './Router';
import routes from './routes';
import reducers from './reducers';
import createStore from './Store';

NativeModules.DevSettings.setIsDebuggingRemotely(true); // uncomment to debug

const store = createStore({ reducers, middlewares: [new PromiseMiddleware()] });

export default class App extends React.Component {
  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
    });
  }

  render() {
    return (
      <Provider store={store}>
        <Router routes={routes} />
      </Provider>
    );
  }
}
