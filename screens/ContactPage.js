import React, { Component } from '../node_modules/react';
import { 
  Dimensions,
	StyleSheet,
	Text,
  View,
  TouchableOpacity,
  Linking,
  Share
 } from 'react-native';
 import HomePage from '../screens/HomePage';
import MenuButton from '../screens/MenuButton';
import { Ionicons } from '../node_modules/@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const { width: DEVICE_WIDTH, height: DEVICE_HEIGHT } = Dimensions.get('window');

 export default class ContactPage extends Component{
    
    

    render () {

      return(
        <View style={styles.container}>
            <View style={styles.container1}>
                        <MenuButton navigation={this.props.navigation} />
                <Text style={styles.textTitle1}>
                Contatos
                </Text>                   
            </View>
            
            <View style={styles.cont}>




                <View style={styles.contc}>
                <LinearGradient
                    colors={['#8B0000', '#3b5998']}
                    style={{ borderRadius: 20, marginBottom: 10, borderWidth: 3, borderColor: '#fff' }}>

                <TouchableOpacity style={styles.link} onPress={() => {
                    const facebookURL = `fb://page/1904360166541310/`;
                            return (Linking.canOpenURL(facebookURL).then(supported => {
                                if (supported) {
                                  return Linking.openURL(facebookURL);
                                } else {
                                  return Linking.openURL("https://www.facebook.com/ad.evangelhoprimitivo.7");
                                }
                              }))
                        }}>
                    <Ionicons 
                        name={'logo-facebook'}
                        color="#fff"
                        size={42}
                        style={styles.icons}
                    />
                    <Text style={{color: '#fff'}}>Facebook</Text>
                    
                </TouchableOpacity>
                
                </LinearGradient>
                

                <TouchableOpacity style={styles.comp} onPress={() => {
                            return Share.share({
								message: 'Oi eu estou ouvindo a Rádio IADEP, conheça o nosso Facebook: https://www.facebook.com/pages/category/Religious-Organization/AD-Igreja-Atos-do-Evangelho-Primitivo-1904360166541310/',
								title: 'Conheça Nosso Facebook!'
							});
                        }}>
                            <Ionicons 
                                    name={"md-share"}
                                    color="#fff"
                                    size={32}
                                    style={styles.icons}
                            />
            </TouchableOpacity>

            </View>


                <View style={styles.contc}>
                <LinearGradient
                    colors={['#8B0000', '#3b5998']}
                    style={{ borderRadius: 20, marginBottom: 10, borderWidth: 3, borderColor: '#fff' }}>

                <TouchableOpacity style={styles.link} onPress={() => {
                    const facebookURL = `instagram://user?username=igrejaiadep`;
                    return (Linking.canOpenURL(facebookURL).then(supported => {
                        if (supported) {
                          return Linking.openURL(facebookURL);
                        } else {
                          return Linking.openURL("https://www.instagram.com/igrejaiadep/");
                        }
                      }))}}>
                    <Ionicons 
                        name={'logo-instagram'}
                        color="#fff"
                        size={42}
                        style={styles.icons}
                    />
                    <Text style={{color: '#fff'}}>Instagram</Text>
                </TouchableOpacity>

                </LinearGradient>
                
                <TouchableOpacity style={styles.comp} onPress={() => {
                            return Share.share({
								message: 'Oi eu estou ouvindo a Rádio IADEP, conheça o nosso Instagram: https://www.instagram.com/igrejaiadep/',
								title: 'Conheça o Nosso Instagram!'
							});
                        }}>
                            <Ionicons 
                                    name={"md-share"}
                                    color="#fff"
                                    size={32}
                                    style={styles.icons}
                            />
            </TouchableOpacity>


            </View>


                <View style={styles.contc}>
                <LinearGradient
                    colors={['#8B0000', '#3b5998']}
                    style={{ borderRadius: 20, marginBottom: 10, borderWidth: 3, borderColor: '#fff' }}>
                <TouchableOpacity style={styles.link} onPress={() => {
                            const siteURL = `https://www.assembleiadedeusiadep.com/`;
                            return Linking.openURL(siteURL);
                        }}>
                    <Ionicons 
                        name={'md-planet'}
                        color="#fff"
                        size={42}
                        style={styles.icons}
                    />
                    <Text style={{color: '#fff'}}>Site</Text>
                </TouchableOpacity>
                </LinearGradient>

                <TouchableOpacity style={styles.comp} onPress={() => {
                            return Share.share({
								message: 'Oi eu estou ouvindo a Rádio IADEP, conheça o nosso site! https://www.assembleiadedeusiadep.com/',
								title: 'Conheça o Nosso Site!'
							});
                        }}>
                            <Ionicons 
                                    name={"md-share"}
                                    color="#fff"
                                    size={32}
                                    style={styles.icons}
                            />
            </TouchableOpacity>

            </View>

            </View>
                
        </View>
      )}
};

const styles = StyleSheet.create({
    container: {
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
          alignSelf: 'stretch',
          backgroundColor: '#EAEAEC',
      },
    container1: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch',
        backgroundColor: '#EAEAEC',
      },
    textTitle1: {
      fontSize: 25,
      fontWeight: 'bold',
      marginBottom: DEVICE_HEIGHT*0.03,
      marginTop: DEVICE_HEIGHT*0.13,
      color: '#8B0000',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    cont: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '10%'
    },
    link: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'transparent',
        width: 220,
        height: 70,
        borderRadius: 20,
    },
    contc:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    comp: {
        backgroundColor: '#8B0000',
        borderRadius: 15,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 12,
        paddingRight: 12,
        marginLeft: 10,
        marginBottom: 10,
        borderWidth: 3, 
        borderColor: '#fff'
    }
  });