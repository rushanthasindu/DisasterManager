import React, { memo } from 'react';
import Background from '../components/Background1';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Paragraph from '../components/Paragraph';
import Button from '../components/Button';
import Geolocation from '../model/Geolocation'
import { StatusBar } from 'react-native'
import { AsyncStorage} from 'react-native'


const Dashboard = ({ navigation }) => (
  
  <Background>
       <Geolocation />
  </Background>
);

export default memo(Dashboard);
