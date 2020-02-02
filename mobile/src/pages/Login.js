import React, { useState, useEffect } from "react";
import { View, Image, StyleSheet, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from "react-native";
import { AsyncStorage } from 'react-native';


import logo from '../assets/logo.png'

import api from "../services/api";


export default function Login( { navigation } ) {
    const [email, setEmail] = useState('');
    const [techs, setTechs] = useState('');

    // isso faz com que me app va direto para tela de lista
    // um botao de logout é nescessario para voltar para login 
    // useEffect(() => {
    //     AsyncStorage.getItem('user').then(user => {
    //         if (user) {
    //             navigation.navigate('List');
    //         }
    //     })
    // }, []);

    async function handleSubmit() {
        // console.log(email);
        const response = await api.post('/sessions/', {
            email
        });

        const { _id } = response.data;

        await AsyncStorage.setItem('user', _id);
        await AsyncStorage.setItem('techs', techs);

        navigation.navigate('List');
    }

    return (
        <KeyboardAvoidingView  enabled={Platform.OS === 'ios' } behavior='padding' style={styles.container} >
            <Image source={logo} />

            <View style={styles.form}>
                <Text style={styles.label}>SEU E-MAIL *</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Seu melhor e-mail*'
                    placeholderTextColor='#999'
                    keyboardType='email-address'
                    autoCorrect={false}
                    autoCapitalize='none'
                    value={email}
                    onChangeText={text => setEmail(text)}

                />

                <Text style={styles.label}>TECNOLOGIAS *</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Tecnologias de interesse*'
                    placeholderTextColor='#999'
                    autoCorrect={false}
                    autoCapitalize= 'words'
                    value= {techs}
                    onChangeText={setTechs}  // option only available in react Native

                />
                <TouchableOpacity onPress={ handleSubmit } style={styles.button}>
                    <Text style={styles.buttonText}>Encontrar spots</Text>
                </TouchableOpacity>
                <Text style={styles.txt}> Test para texto </Text>
            </View>
        </KeyboardAvoidingView>)
}

const styles = StyleSheet.create({
    txt:{
        marginTop: 10,
        textShadowColor:'#000',
        textShadowOffset:{width: 5, height: 5},
        textShadowRadius:10,
    },  

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'

    },
    form:{
        alignSelf: 'stretch',
        paddingHorizontal: 30,
        marginTop: 30
    },

    label: {
        fontWeight: 'bold',
        color : '#444',
        marginBottom:  8 
    },

    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        paddingHorizontal: 20,
        fontSize: 16, 
        color: '#444', 
        height: 44,
        marginBottom: 20,
        borderRadius: 2
    },

    button: {
        height: 42,
        backgroundColor: '#f05a5b',
        justifyContent: 'center', 
        alignItems: 'center',
        borderRadius: 2

    },

    buttonText: {
        color: '#fff' ,
        fontWeight: 'bold',
        fontSize: 16,
        // textAlign: 'center'


    }


});