import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'react-router-native';

class PageA extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>PageA</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Link to="/page-b"><Text>Go to Page B</Text></Link>
      </View>
    );
  }
}

class PageB extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>PageB</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Link to="/"><Text>Go to Page A</Text></Link>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default [
  {
    path: '/',
    render: () => <PageA />,
  },
  {
    path: '/page-b',
    render: () => <PageB />
  },
];
