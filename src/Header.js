import React, { Component, useState } from 'react';
import {
    Pressable,
    Text,
    View,
    StyleSheet,
} from 'react-native';

const Header = (props) => {
    return (
        <View style={styles.view}>
            <Text style={styles.text}>
                React Native Tutorial
            </Text>

        </View>
    )
}
const styles = StyleSheet.create({
    view: {
        width:'100%',
        height: 50,
        backgroundColor: '#00f',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize:25,
        color:'#FFFFFF',
        fontWeight:'bold',
    },

});
export default Header