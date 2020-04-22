import React, { Component } from 'react'
import { StatusBar } from 'react-native'
import { AsyncStorage, View, Text, Switch, StyleSheet,TextInput,TouchableOpacity} from 'react-native'
import Button from '../components/Button';
import Columns from 'react-native-columns'
import { Thread } from 'react-native-threads';

import { FlatGrid } from 'react-native-super-grid';
 

class SwichExample extends Component {
   state = {
      longitude: 0,
      latitude: 0,
      deviceId: '',
      
      items : [
        {  title: 'Distance to checkpoint', value: 'TURQUOISE', code: '#1abc9c' }, { title: 'Temp',value: 'EMERALD', code: '#2ecc71' },
        { title: 'Humidity', value: 'PETER RIVER', code: '#3498db' }, { title: 'Hight to Maximum level',value: 'AMETHYST', code: '#9b59b6' },
        { title: 'Last Updated time',value: 'WET ASPHALT', code: '#34495e' }, { title: 'TURQUOISE',value: 'GREEN SEA', code: '#16a085' },
       
      ]
   }
   
   

   

   componentDidMount = () => {
      

      setInterval(() => {

       navigator.geolocation.getCurrentPosition(
         (position) => {
            const latitude = JSON.stringify(position.coords.latitude);
            this.setState({ latitude });
            const longitude = JSON.stringify(position.coords.longitude);
            this.setState({ longitude });
         },
         (error) => alert(error.message),
         { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
      );
           
           const params='longitude'.concat("=",this.state.longitude).concat("&latitude=",this.state.latitude)
           const url='http://192.168.8.100/disasterManager/getInfo.php'.concat("?",params);
          console.log(url);
           fetch(url, {
        method: 'GET'
           })
              .then((response) => response.json())
              .then((responseJson) => {
                 console.log(responseJson);
                 this.setState({
                    items:[
                        {  title: 'Distance to checkpoint', value: responseJson.distance, unit:'Km', code: '#1abc9c' }, { title: 'Temp',value: responseJson.temp, unit:'Celcius', code: '#2ecc71' },
                        { title: 'Humidity', value: responseJson.hum, unit:'%',code: '#3498db' }, { title: 'Hight to Maximum level',value: responseJson.waterLevel/100 , unit:'m', code: '#9b59b6' },
                        { title: 'Last Updated time',value: responseJson.lastUpdated, unit:'', code: '#34495e' }, 
                       
                      ]
                 })
              })
              .catch((error) => {
                 console.error(error);
              });
        
           }, 5000);
     
   }
   componentWillUnmount = () => {
    
   }
   render() {
      return (
        <FlatGrid
        itemDimension={130}
        items={this.state.items}
        style={styles.gridView}
        // staticDimension={300}
        // fixed
        // spacing={20}
        renderItem={({ item, index }) => (
          <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
              <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.value}>{item.value} {item.unit}</Text>
        
          </View>
        )}
      />
      )
   }
}
export default SwichExample

const styles = StyleSheet.create ({
   container: {
      flex: 1,
      alignItems: 'center',
      marginTop: 150
   },
   gridView: {
    marginTop: 20,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    height: 150,
  },
  value: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  
  title: {
    fontSize: 16,
    color: 'blue',
    fontWeight: '900',
    marginBottom:40
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
})