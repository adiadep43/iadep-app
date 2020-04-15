import React, { Component , useState} from '../node_modules/react';
import { 
  Dimensions,
	StyleSheet,
	Text,
  View,
  TouchableOpacity,
 } from 'react-native';
import MenuButton from '../screens/MenuButton';
import { Ionicons } from '../node_modules/@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import * as MailComposer from 'expo-mail-composer';


const { width: DEVICE_WIDTH, height: DEVICE_HEIGHT } = Dimensions.get('window');

 export default class BugPage extends Component{
    
     

    render () {

        function SendMail(){
            MailComposer.composeAsync({
                subject: "Quero Relatar um Bug!",
                recipients: ['adevangelhoprimitivo@gmail.com'],
                body: ''
            });
        }

      return(
        <View style={styles.container}>
            <View style={styles.container1}>
                        <MenuButton navigation={this.props.navigation} />
                <Text style={styles.textTitle1}>
                Relatar um Bug
                </Text>                   
            </View>
            
            <View style={styles.cont}>
                <View style={{flexDirection: 'column',
        alignItems: 'center',justifyContent: 'center'}}>
                <Text style={{color: '#000', fontSize: 20,marginBottom: 20, paddingLeft: 20}}>
                        Você será direcionado para o email, envie-nos o que aconteceu!
                    </Text>
                </View>
                    
                <TouchableOpacity style={styles.bug} onPress={SendMail}>
                    <Text style={{color: '#fff', fontSize: 20}}>
                        Relatar
                    </Text>
                </TouchableOpacity>

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
    },
    bug: {
        backgroundColor: '#8B0000',
        width: 220,
        height: 70,
        borderRadius: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    }
  });