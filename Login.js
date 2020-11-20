import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import  SignUp  from '../geny-demo-1/SignUp';
import * as firebase from 'firebase';


export default function Login({navigation})  {
     const [age, setAge] = useState('');

    const [name, setName] = useState('');
    
        
        return (
            
            <View style={styles.container}>

                <TextInput style={styles.input}
                    placeholder='Email'
                    placeholderTextColor='#FFF'
                    onChangeText={(val) => setName(val)}
                />
                <TextInput style={styles.input}
                    placeholder='Password'
                    placeholderTextColor='#FFF'
                    keyboardType='numeric'
                    onChangeText={(val) => setAge(val)}
                />
                <Button
                    title='Login'
                    onPress = {() => {
                        
                        firebase.auth().signInWithEmailAndPassword(name,age).then(()=>{
                            var Email=name.substring(0, name.indexOf("@"));
                            exports.s=Email;
                            navigation.navigate("home");
                        },(error)=>{
                             Alert.alert(error.message);
                        });
                    }}
                />
                <View style={{ marginTop: 10 }}>
                    <Button

                        color="#FFC0CB"
                        placeholderTextColor="#1e90ff"
                        title='SignUp'
                        onPress={() => navigation.navigate("SignUp")}

                    />
                </View>
            </View>
        )
    }


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        padding: 30,
        justifyContent: 'center',
    },
    input: {
        alignItems: 'center',
        borderRadius: 10,
        borderWidth: 1,
        color: '#FFF',
        borderColor: '#FFF',
        padding: 8,
        width: 300,
        marginBottom: 10
    }
});