/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

import Home from './Screens/Home'
import ViewJson from './Screens/ViewJson'
const Stack= createStackNavigator();
const App = () =>{
  return(
    <NavigationContainer>
      <StatusBar barStyle='dark-content' />
      <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} 
      options={{title:'Pagination',
      headerStyle:{
        backgroundColor:'#0947A5',

      },headerTintColor:'#fff',headerTitleStyle:{fontWeight:'bold'}}} />
       <Stack.Screen name="ViewJson" component={ViewJson} 
      options={{title:'View Details',
      headerStyle:{
        backgroundColor:'#0947A5',

      },headerTintColor:'#fff',headerTitleStyle:{fontWeight:'bold'}}} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App;
