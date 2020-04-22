import React, { memo } from 'react';
import Background from '../components/Background1';
import Logo from '../components/Logo1';
import Header from '../components/Header';
import Button from '../components/Button';
import Paragraph from '../components/Paragraph';
import Info from '../model/Info';
import { TouchableOpacity } from 'react-native-gesture-handler';



const HomeScreen = ({ navigation }) => (
  
  <Background>
    <TouchableOpacity mode="contained" onPress={() => navigation.navigate('LoginScreen')}>

      <Logo />
    </TouchableOpacity>
    

    <Info />

   
  </Background>
);

export default memo(HomeScreen);
