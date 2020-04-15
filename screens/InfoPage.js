import React, { Component } from '../node_modules/react';
import { 
  Dimensions,
	StyleSheet,
	Text,
  View,
  FlatList
 } from 'react-native';
 import HomePage from '../screens/HomePage';
import MenuButton from '../screens/MenuButton';

const { width: DEVICE_WIDTH, height: DEVICE_HEIGHT } = Dimensions.get('window');

 export default class InfoPage extends Component{
    
    

    render () {

      const DATA = [
        {
          id: 1,
          title: 'Endereço',
          des: 'Rua Bom Jesus, 231, Bom Jardim, Fortaleza-CE'
        },
        {
          id: 2,
          title: 'Email',
          des: 'adevangelhoprimitivo@gmail.com'
        }
      ];

      const DATA2 = [
        {
          id: 1,
          title: 'Domingo (Manhã)',
          desc: 'Escola Dominical',
          hora: '8:30 Hrs'
        },
        {
          id: 2,
          title: 'Domingo',
          desc: 'Culto da Familia',
          hora: '18:00 Hrs'
        },
        {
          id: 3,
          title: 'Segunda',
          desc: 'Culto de Oração',
          hora: '19:30 Hrs'
        },
        {
          id: 4,
          title: 'Quarta',
          desc: 'Culto de Adoração',
          hora: '19:00 Hrs'
        },
        {
          id: 5,
          title: 'Sexta',
          desc: 'Culto de Ensino',
          hora: '19:00 Hrs'
        },
      ];

      function Handler({ title, des }){
        return(
          <View style={{backgroundColor: '#8B0000', justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 20, marginBottom: 15, marginTop: 6}}>{title}</Text>
            <Text style={{color: '#fff', marginBottom: 35, fontSize: 17, fontWeight: '600'}}>{des}</Text>
          </View>
        );
      }

      function HandlerI({ title , desc, hora}){
        return(
          <View style={{backgroundColor: '#8B0000', justifyContent: 'center', alignItems: 'center', paddingTop: 15}}>
            <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 20, marginBottom: 15}}>{title}</Text>
            <Text style={{color: '#fff', fontSize: 18, fontWeight: '600', marginBottom: 15}}>{desc}</Text>
            <Text style={{color: '#8B0000', marginBottom: 20, fontSize: 17, fontWeight: '500', backgroundColor: '#FFF', borderRadius: 20, paddingTop: 5, paddingBottom: 5, paddingLeft: 7, paddingRight: 7}}>{hora}</Text>
          </View>
        );
      }

      return(
        <View style={styles.container}>
          <View style={styles.container1}>
					  <MenuButton navigation={this.props.navigation} />
            <Text style={styles.textTitle1}>
              Informações
            </Text>                   
				  </View>

        
        <FlatList 
            data={DATA}
            style={{width: '100%', height: '75%', marginBottom: 10,}}
            renderItem={({item}) => (
              <>
                <Handler title={item.title} des={item.des}/>
              </>
            )}
            keyExtractor={item => item.id}
          />
          <Text style={{fontSize: 20, fontWeight: 'bold', marginBottom: 5}}>
            Dias dos Cultos
          </Text>
          <FlatList 
            data={DATA2}
            style={{width: '100%', height: '100%', marginTop: 10}}
            renderItem={({item}) => (
              <>
                <HandlerI title={item.title} desc={item.desc} hora={item.hora}/>
              </>
            )}
            keyExtractor={item => item.id}
          />
                
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
      marginTop: DEVICE_HEIGHT*0.06,
      color: '#8B0000',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });