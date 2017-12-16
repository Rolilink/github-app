import React from 'react';
import { View } from 'react-native';
import { Card, CardItem, Body, Text, Badge } from 'native-base';
import styles from '../styles/InfoCard';

export default class InfoCard extends React.Component {
  render() {
    return (
      <Card>
        <CardItem>
          <Body>
            <View>
              <Text>Search for repository collaborators using the following syntax:</Text>
              <Badge style={styles.badge}><Text>owner/repository</Text></Badge>
              <Text>Example when searching the facebook react repo search for:</Text>
              <Badge style={styles.badge}><Text>facebook/react</Text></Badge>
              <Text>
                Search for repository owners by keywords typing the keywords you want to search for.
              </Text>
            </View>
          </Body>
        </CardItem>
      </Card>
    );
  }
}
