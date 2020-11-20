import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import {age} from '../geny-demo-1/Login'
import * as firebase from 'firebase';
const operations = require('./Login');
export default function home(){
    var Nam;var Emai;var Phone
    firebase.database().ref(operations.s).on('value', (snapshot) => {
        const Email = snapshot.val().Email;
        const Name = snapshot.val().Name;
        const Phoneno = snapshot.val().Phoneno;
        console.log("New high score: " + Email);
        console.log("New high score: " + Name);
        console.log("New high score: " + Phoneno);
        Nam=Name;
        Emai=Email;
        Phone=Phoneno;
    });
   
    return(
        <View style={styles.container}>
            <Text style={[{ color: '#FFF',marginTop:8}]}>Name:    {Nam}</Text>
            <Text style={[{ color: '#FFF', marginTop: 8 }]}>Email:    {Emai}</Text>
            <Text style={[{ color: '#FFF', marginTop: 8 }]}>Phone:    {Phone}</Text>
        </View>
            )
}

const styles = StyleSheet.create({
                container: {
                flex: 1,
        backgroundColor: '#000',
        padding: 50,
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