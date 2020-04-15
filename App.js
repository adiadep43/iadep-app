import React, { useState, useEffect, Component } from 'react';
import { 
  Dimensions,
	Image,
	StyleSheet,
	Text,
	TouchableHighlight,
  View,
  Slider,
  SafeAreaView,
  ScrollView
 } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import DrawerNavigator from './screens/DrawerNavigation';



export default class App extends Component{
  
  render () {
	
    return(
		<DrawerNavigator/>
				
	)}
}

/*const styles = StyleSheet.create({
  container: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'space-between',
		alignItems: 'center',
		alignSelf: 'stretch',
		backgroundColor: BACKGROUND_COLOR,
	},
	portraitContainer: {
    marginTop: 80,
    alignItems: 'center',
    elevation: 5,
	},
	portrait: {
		height: 275,
    width: 275,
    borderRadius: 25,
	},
	detailsContainer: {
		height: 40,
		marginTop: 40,
		alignItems: 'center',
	},
	playbackContainer: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'space-between',
		alignItems: 'center',
		alignSelf: 'stretch',
	},
	playbackSlider: {
		alignSelf: 'stretch',
		marginLeft: 10,
		marginRight: 10,
	},
	text: {
		fontSize: FONT_SIZE,
		minHeight: FONT_SIZE,
  },
  textTitle1: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
	marginTop: 25,
	color: '#ad2630',
  },
  textAovivo: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#f33',
  },
  wrapper: {
    borderWidth: 5,
    borderRadius: 50,
    borderColor: '#6d2630',
    padding: 3,
  },
	buttonsContainerBase: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	buttonsContainerTopRow: {
		maxHeight: 40,
		minWidth: DEVICE_WIDTH / 2.0,
		maxWidth: DEVICE_WIDTH / 2.0,
	},
	buttonsContainerMiddleRow: {
		maxHeight: 40,
		alignSelf: 'stretch',
		paddingRight: 20,
	},
	volumeContainer: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		minWidth: DEVICE_WIDTH - 10,
		maxWidth: DEVICE_WIDTH - 10,
	},
	volumeSlider: {
		width: DEVICE_WIDTH - 100,
	},
	buttonsContainerBottomRow: {
		alignSelf: 'stretch',
	},
	rateSlider: {
		width: DEVICE_WIDTH - 80,
	},
});*/