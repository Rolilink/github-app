import React from 'react';
import {
  Container,
  Header,
  Title,
  Content,
  Body,
} from 'native-base';
import InfoCard from './InfoCard';
import SearchForm from './SearchForm';

export default class SearchPage extends React.Component {
  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>
              Github Search App
            </Title>
          </Body>
        </Header>
        <Content padder>
          <InfoCard />
          <SearchForm />
        </Content>
      </Container>
    );
  }
}
