import React, { Component, useState } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
} from 'react-native';
// 코드 자동 정렬 : Shift + Alt + F
const App = () => {

  return (
    <View style={styles.body}>
      
    </View>
  )

}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: "center",
  },
  text: {
    color: '#000000',
    fontSize: 35,
    fontStyle: 'italic',
    fontWeight: 'bold',
    margin: 10,
    textTransform: 'uppercase',
  },
});

export default App