import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { Provider } from 'react-redux';
import store from './store';
import CompAContainer from './components/CompAContainer';
import CompBContainer from './components/CompBContainer';


export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View >
          <CompAContainer/>
          <CompBContainer/>
        </View>
      </Provider>
    );
  }
}