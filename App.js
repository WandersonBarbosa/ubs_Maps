/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

import Mapa from './components/Mapa'
import Header from './components/Header'
export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header/>
        <Mapa/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
