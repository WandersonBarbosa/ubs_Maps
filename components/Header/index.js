import React, { Component } from 'react';
import { View, Text, AsyncStorage, TouchableOpacity,Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';
import { colors } from '../styles';

const Header =()=>{
    
    return (
        <View style={styles.container}>
          <TouchableOpacity onPress={this.logout}>
            <Icon name="menu" size={17} color={colors.primary} />
          </TouchableOpacity>
          <Text style={styles.title}>Maps UBS</Text>
          <TouchableOpacity onPress={this.logout}>
            <Icon name="add-a-photo" size={17} color={colors.primary} />
          </TouchableOpacity>
        </View>
    );
} 

export default Header