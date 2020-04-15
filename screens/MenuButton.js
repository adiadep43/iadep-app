import React, { Component } from '../node_modules/react';
import { StyleSheet } from 'react-native';
import { MaterialIcons } from '../node_modules/@expo/vector-icons';


import HomePage from '../screens/HomePage';
import { createAppContainer } from 'react-navigation';

export default class MenuButton extends Component{
    render () {
      return(
        <MaterialIcons
            name="menu"
            color="#8B0000"
            size={32}
            style={styles.menuicon}
            onPress={() => this.props.navigation.toggleDrawer()}
        />
      )};
  };

  const styles = StyleSheet.create({
    menuicon: {
        zIndex: 9,
        position: 'absolute',
        top: 40,
        left: 20
    }
  });