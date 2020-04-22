import React, { Component } from 'react'
import { StatusBar } from 'react-native'
import { AsyncStorage, View, Text, Switch, StyleSheet,TextInput,TouchableOpacity} from 'react-native'
import Button from '../components/Button';
import Columns from 'react-native-columns'
import { Thread } from 'react-native-threads';



class SwichExample extends Component {
   state = {
      longitude: 'unknown',
      latitude: 'unknown',
      deviceId: '',
   }
   
   handleDeviceId = (text) => {
      this.setState({ deviceId: text })
   }

   setDevice = (longitude, latitude,deviceId) => {
      // const latitude=this.state.latitude;
      // const longitude=this.state.longitude;
      // const deviceId=this.state.deviceId;
      const params='latitude'.concat("=",latitude).concat("&longitude=",longitude).concat("&deviceId=",deviceId);
      const url='http://192.168.8.100/disasterManager/setLocation.php'.concat("?",params);
      fetch(url, {
         method: 'GET'
      })
      .then((response) => response.json())
      .then((responseJson) => {
         console.log(responseJson);
         // this.setState({
         //    data: responseJson
         // })
         alert('Success');
      })
      .catch((error) => {
         console.error(error);
         alert('Error');
      });

      alert('longitude: ' + longitude + ' latitude: ' + latitude + ' deviceId: ' + deviceId)
   }

   componentDidMount = () => {
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
     
   }
   componentWillUnmount = () => {
    
   }
   render() {
      return (
         <View style = {styles.container}>
            <Text style = {styles.boldText}>
            Longitude:  <Text style =  {styles.boldText1}>
               {this.state.longitude}
            </Text>
            </Text>
            
         
            <Text style = {styles.boldText}>
            Latitude:  <Text style =  {styles.boldText1}>
               {this.state.latitude}
            </Text>
            </Text>

            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Device ID"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handleDeviceId}/>
            
           
            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => this.setDevice(this.state.longitude, this.state.latitude, this.state.deviceId)
               }>
               <Text style = {styles.submitButtonText}> Submit </Text>
            </TouchableOpacity>
            
           
         </View>
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
   boldText: {
      fontSize: 20,
      color: 'red',
   }
   ,
   boldText1: {
      fontSize: 20,
      color: 'green',
   },
   input: {
      margin: 15,
      height: 40,
      width:300,
      borderColor: '#7a42f4',
      borderWidth: 1,
      color:'green'
   },
   submitButton: {
      backgroundColor: '#7a42f4',
      padding: 10,
      margin: 15,
      height: 40,
   },
   submitButtonText:{
      color: 'white'
   }
})