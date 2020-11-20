import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert} from 'react-native';

import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignUp from '../geny-demo-1/SignUp';
import Login from '../geny-demo-1/Login';
import home  from '../geny-demo-1/home';
import * as firebase from 'firebase';


const Stack = createStackNavigator(); 
export default function App() {
  
    return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="home" component={home} />
      </Stack.Navigator>
    </NavigationContainer>
    )
  
 
  
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 30,
    justifyContent: 'center',
  },
  input:{
    alignItems:'center',
    borderRadius:10,
    borderWidth: 1,
    color:'#FFF',
    borderColor: '#FFF',
    padding: 8,
    width: 300,
    marginBottom:10
  }
});
