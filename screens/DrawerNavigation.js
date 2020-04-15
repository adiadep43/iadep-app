import React from '../node_modules/react';
import { Dimensions, Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import MenuDrawer from '../screens/MenuDrawer';

import HomePage from '../screens/HomePage';
import InfoPage from '../screens/InfoPage';
import ContactPage from '../screens/ContactPage';
import BugPage from '../screens/BugPage';

const WIDTH = Dimensions.get('window').width;

const home = HomePage;
const info = InfoPage;
const contato = ContactPage;
const bug = BugPage;

const DrawerConfig = {
    drawerWidth: WIDTH*0.83,
    contentComponent: ( { navigation } ) => {
        return(<MenuDrawer navigation={navigation}/>)
    },
};

const DrawerNavigation = createDrawerNavigator({
    Radio: {
        screen: home
    },
    Info: {
        screen: info
    },
    Contato: {
        screen: contato
    },
    Bug: {
        screen: bug
    }
},DrawerConfig);

export default createAppContainer(DrawerNavigation);