import React, { Component } from 'react';
import { AppRegistry,View } from 'react-native';
import { Container} from 'native-base';
import AppRoot from './app/view/AppRoot';

export default class App extends Component {
  render() {
    return (
        <AppRoot />
    );
  }
}

AppRegistry.registerComponent('App', () => App);