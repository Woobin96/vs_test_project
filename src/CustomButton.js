import React, { Component, useState } from 'react';
import {
    Pressable,
    Text,
    StyleSheet,
} from 'react-native';

const CustomButton = (props) => {
    return (
        <Pressable
            onPress={props.onPress}
            hitSlop={{ top: 10, bottom: 10, right: 10, left: 10 }} // 버튼 주변까지 클릭이 가능한거
            android_ripple={{ color: '#00f' }} // 클릭시 물결 같은 효과 
            style={({ pressed }) => [
                { backgroundColor: pressed ? '#078196' : props.color },
                styles.btn,
                { ...props.style },
            ]}
        >
            <Text style={styles.text}>{props.title}</Text>
        </Pressable>
    )
}
const styles = StyleSheet.create({
    text: {
        color: '#000000',
        fontSize: 20,
        margin: 10,
        textAlign: 'center',
    },
    btn: {
        width: 150,
        height: 50,
        alignItems: 'center',
    },
});
export default CustomButton