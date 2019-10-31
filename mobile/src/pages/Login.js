import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";

import logo from '../assets/logo.png'

export default function Login() {
    return (
        <View style={styles.container} >
            <Image source={logo} />
        </View>)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'

    }
});