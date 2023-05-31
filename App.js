import React, { Component, useState } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
} from 'react-native';
// 코드 자동 정렬 : Shift + Alt + F
const App = () => {

  const [name, setName] = useState('Style test');

  const BtnHandler = () => {
    setName('Style Test is Done!!!!!');
  }

  return (
    <View style={styles.body}>
      <Text style={styles.text}>{name}</Text>
      <View style={styles.button}>
        <Button
          title='Update State'
          onPress={BtnHandler}
        ></Button>
      </View>
    </View>
  )

}
// 위처럼 컴포넌트 사용

const styles = StyleSheet.create({
  body: {
    // height: '50%',
    // width: '100%',
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 12,
    borderColor: '#ff33ff',
    borderRadius: 26,
  },
  text: {
    color: '#000000',
    fontSize: 40,
    fontStyle: 'italic',
    margin: 24,
    /**
     * textTransform:'uppercase' 대문자로 변경
     * textTransform:'lowercase' 소문자로 변경
     * textTransform:'capitalize' 앞에 대문자로 변경
     * textTransform:'none' 변경 없음
     * https://reactnative.dev/docs/text-style-props#texttransform
     */
    textTransform: 'uppercase',
  },
  button: {
    width: 200,
    height: 60,
  }

});

export default App