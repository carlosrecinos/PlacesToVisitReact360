import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  VrButton
} from 'react-360';
import { Provider } from 'react-redux';
import Container from './components/Container';
import Letter from './components/Letter';
import PlaceSelector from './components/PlaceSelector';
import store from './store';

export default class App extends React.Component {
  state = {
    greeting: ''
  }
  render() {
    const { greeting } = this.state
    return (
      <Provider store={store}>
        <Container />
      </Provider>
    );
  }
};

AppRegistry.registerComponent('first', () => App);
