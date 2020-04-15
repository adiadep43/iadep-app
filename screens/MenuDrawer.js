import React from 'react';
import { Ionicons } from '../node_modules/@expo/vector-icons';
import { Dimensions, Platform, StyleSheet, View, Component, TouchableOpacity, Text, Image, Linking } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export default class MenuDrawer extends React.Component{
    _linkinsta = () => {
        const instagramURL = `https://www.instagram.com/igrejaiadep/`;
        return Linking.openURL(instagramURL);
    };

    _linkface = () => {
        const facebookURL = `https://www.facebook.com/pages/category/Religious-Organization/AD-Igreja-Atos-do-Evangelho-Primitivo-1904360166541310/`;
        return Linking.openURL(facebookURL);
    };

    navLink(nav, text, icons) {
        return(
            <TouchableOpacity style={{height: 50,}} onPress={() => this.props.navigation.navigate(nav)} >
                <Ionicons 
                    name={icons}
                    color="#8B0000"
                    size={42}
                    style={styles.icons}
                />
                <Text style={styles.link}>
                    {text}
                </Text>
            </TouchableOpacity>
        );
    };
    render () {
      return(
          <ScrollView>
              <View style={{width: undefined, padding: 16, paddingTop: 48, backgroundColor: '#8B0000'}}>
                <Image style={styles.profile} source={require('../assets/icon.png')} />
                <Text style={{color: '#FFF', fontWeight: 'bold'}}>Rádio IADEP</Text>
                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.followers}>Create by Cainã Silva.</Text>
                </View>
              </View>

              <View style={styles.container}>
                {this.navLink('Radio','Rádio','md-radio')}
                {this.navLink('Info','Informações','md-information-circle-outline')}
                {this.navLink('Contato','Contatos','md-people')}
                {this.navLink('Bug','Relate um Bug!','md-bug')}
                {this.navLink('','','')}
              </View>
          </ScrollView>

          /*<View style={styles.container}>
              <View style={styles.topLinks}>
                  <View style={styles.profile} >
                    <View style={styles.imgView} >
                    <Image style={styles.img} source={require('../assets/menuIcon.png')} />
                    <Text style={styles.textTitle1}>
						Rádio IADEP
					</Text>
                    </View>
                  </View>
              </View>
              <View style={styles.bottomLinks}>
                {this.navLink('Radio','Rádio','md-radio')}
                {this.navLink('Facebook','Facebook','logo-facebook')}
                {this.navLink('Instagram','Instagram','logo-instagram')}
                {this.navLink('Site','Site','md-planet')}
              </View>
              <View style={styles.bottomCredit}>
                <Text style={styles.textCredt}>
					Criado por Cainã Silva.
				</Text>
              </View>
          </View>*/
      )};
  };

  const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        flex: 1,
        
    },
    profile: {
        width: 80,
        height: 80,
        borderRadius: 40,
        borderWidth: 3,
        borderColor: '#FFF',
        marginBottom: 15,
    },
    name: {
        color: '#FFF',
        fontSize: 20,
        fontWeight: '800',
        marginVertical: 8,
    },
    followers: {
        color: 'rgba(225,225,225,0.8)',
        fontSize: 13,
        marginRight: 4,
    },
    icons: {
        marginLeft: WIDTH*0.07,
        marginTop: WIDTH*0.04,
    },
    link: {
        position: 'absolute',
        fontSize: 20,
        textAlign: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        top: WIDTH*0.07,
        left: WIDTH*0.28,
    },
});

/*const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    bottomCredit: {
        flex: 1,
        backgroundColor: '#eee',
        paddingTop: 10,
        paddingBottom: 10,
        alignItems: 'center',
    },
    textCredt: {
        color: '#aaa',
    },
    profile: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 25,
        borderBottomWidth: 1,
        borderBottomColor: '#777',
    },
    img: {
        width: 100,
        height: 100,
        borderRadius: 10,
        backgroundColor: 'white',
    },
    imgView: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    topLinks: {
        height: 250,
        backgroundColor: '#eee',
    },
    bottomLinks: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 10,
        paddingBottom: 320,
    },
    icons: {
        marginLeft: 15,
        marginTop: 15,
    },
    link: {
        position: 'absolute',
        fontSize: 20,
        textAlign: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        top: 25,
        left: 100,
    },
    textTitle1: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 20,
        marginTop: 40,
        color: '#ad2630',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      },
});*/