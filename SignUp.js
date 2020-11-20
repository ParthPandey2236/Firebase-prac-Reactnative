import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import * as firebase from 'firebase';


export default function SignUp({ navigation }){ 
     
    const [Email, setEmail] = useState('');
    const [Phone, setPhone] = useState('');
    const [Name, setName] = useState('');
    const [Password, setPassword] = useState('');
    return (
        <View style={styles.container}>

            <TextInput style={styles.input}
                placeholder='Name'
                placeholderTextColor='#FFF'
                onChangeText={(val) => setName(val)}
            />
            <TextInput style={styles.input}
                placeholder='Email'
                placeholderTextColor='#FFF'
                onChangeText={(val) => setEmail(val)}
            />
            <TextInput style={styles.input}
                placeholder='Password'
                placeholderTextColor='#FFF'
                keyboardType='numeric'
                onChangeText={(val) => setPassword(val)}
            />
            <TextInput style={styles.input}
                placeholder='Phone No.'
                placeholderTextColor='#FFF'
                keyboardType='numeric'
                onChangeText={(val) => setPhone(val)}
            />
            <Button
                title='SignUp'
                onPress={() => {
                    firebase.auth().createUserWithEmailAndPassword(Email,Password).then(()=>{
                        
                        firebase.database().ref(Email.substring(0,Email.indexOf("@"))).set({
                            Email: Email,
                            Name:  Name,
                            Phoneno: Phone,
                        }).then(()=>{
                            navigation.navigate("Login");
                        },(error)=>{
                            Alert.alert(error.message);
                        })
                        
                    },(error)=>{
                        Alert.alert(error.message);
                    });
                }}
            />
            <View style={{ marginTop: 10 }}>
                <Button

                    color="#FFC0CB"
                    placeholderTextColor="#1e90ff"
                    title='Login'
                    onPress={() => Alert.alert('My name is ' + name + ' and I am ' + age + ' years old.')}
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
