import React, { useState, useEffect } from "react";
import { SafeAreaView, StyleSheet, Text, Image, AsyncStorage } from "react-native";

import logo from '../assets/logo.png';

import SpotList from '../components/SpotsList';

export default function List() {
    const [ techs, setTechs ] = useState([]);
 
    useEffect( () => { 
        AsyncStorage.getItem('techs').then( storagedTechs => {
            const techsArray = storagedTechs.split(',').map(tech => tech.trim());

            setTechs(techsArray);
        })
    }, []);
    return (
        <SafeAreaView style={styles.container}> 
            <Image style={styles.logo} source={logo}/>
            <Text>
                {techs}
            </Text>
            {techs.map(tech => <SpotList key={tech} tech={tech} />)}

        </SafeAreaView>
            
            
    )
}

const styles = StyleSheet.create({
    constainer: {
        flex: 1,
    },

    logo: {
        height: 32,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginTop:10,
    },


});