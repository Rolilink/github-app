import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { Link } from 'react-router-native';

class PageA extends React.Component {
  render() {
    return (
      <Content contentContainerStyle={styles.container}>
        <View style={styles.container}>
          <Text>PageA</Text>
          <Text>Changes you make will automatically reload.</Text>
          <Button style={styles.button}><Link to="/page-b"><Text>Go to Page B</Text></Link></Button>
        </View>
      </Content>
    );
  }
}

class PageB extends React.Component {
  render() {
    return (
      <Content contentContainerStyle={styles.container}>
        <View style={styles.container}>
          <Text>PageB</Text>
          <Text>Changes you make will automatically reload.</Text>
          <Button style={styles.button}><Link to="/"><Text>Go to Page A</Text></Link></Button>
        </View>
      </Content>
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
  button: {
    alignSelf: 'center',
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
