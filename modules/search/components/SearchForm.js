import React from 'react';
import { View } from 'react-native';
import { Link } from 'react-router-native';
import { Form, Item, Label, Input, Button, Text } from 'native-base';
import styles from '../styles/SearchForm';

const REPO_SEARCH = 'REPO';
const KEYWORD_SEARCH = 'KEYWORD';


export default class SearchForm extends React.Component {
  constructor() {
    super();

    this.state = {
      query: '',
    };
  }

  get query() {
    return this.state.query || '';
  }

  get repo() {
    const { query } = this;
    const repo = {
      owner: query.split('/')[0],
      name: query.split('/')[1],
    };

    return repo;
  }

  get searchButton() {
    const { query } = this;

    if (query.length === 0) {
      return null;
    }

    console.log(this.searchType);

    switch (this.searchType) {
      case REPO_SEARCH:
        return (
          <Button large full >
            <Link to={`/repos/contributors/${this.repo.owner}/${this.repo.name}`}>
              <Text>Search Github</Text>
            </Link>
          </Button>
        );
      case KEYWORD_SEARCH:
        return (
          <Button large full >
            <Link to={`/repos/owners/search/${query}`}>
              <Text>Search Github</Text>
            </Link>
          </Button>
        );
      default:
        return null;
    }
  }

  get searchType() {
    const { query } = this;

    console.log(query);

    return query.includes('/') ? REPO_SEARCH : KEYWORD_SEARCH;
  }

  render() {
    return (
      <View>
        <Form>
          <Item style={styles.searchInput} floatingLabel>
            <Label>Search Query</Label>
            <Input onChange={({ nativeEvent }) => this.setState({ query: nativeEvent.text })} />
          </Item>
          { this.searchButton }
        </Form>
      </View>
    );
  }
}
