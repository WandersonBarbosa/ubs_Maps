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
  View,
  Dimensions
} from 'react-native';

import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

const {width ,height} = Dimensions.get('window');

export default class Mapa extends Component{
  constructor(props){
    super(props)
    this.state ={
      region: {
        latitude:null,
        longitude:null,
        latitudeDelta:null,
        longitudeDelta:null,
      }
    }
  }

  render() {
    return (
      <View style={styles.container}>
         <MapView
         style={styles.map}
         region={{
           latitude: -4.8647523,
           longitude: -43.339121,
           latitudeDelta: 0.015,
           longitudeDelta: 0.0121,
         }}
       >
       </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map:{
    flex:1,
    width: width
  }
});
