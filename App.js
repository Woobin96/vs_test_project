import React, { Component, useState } from 'react';
import {
  Button,
  FlatList,
  RefreshControl,
  ScrollView,
  SectionList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
// 코드 자동 정렬 : Shift + Alt + F
const App = () => {


  const [Name, setName] = useState('??');


  // jsx 는 view 안에 js 를 사용 가능 map() 안에 함수 아무거나 써도댐
  // ScrollView 사용 할 떄 View 자체를 빼도 댐
  return (
    <View style={styles.body}>
      <Text style={styles.text}>your name ?</Text>
      <TextInput
        // keyboardType='' // 키보드 타입 정하는거
        // maxLength={3} // input max 입력개수
        // editable={false} // 활성 / 비활성
        secureTextEntry // 비밀번호
        style={styles.text_input}
        placeholder='nameing'
        onChangeText={(value) => setName(value)}
      />
      <Text style={styles.text}>your name is ...</Text>
      <Text style={styles.text}>{Name}</Text>
    </View>

  )

}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center', // 가로
    // justifyContent: "flex-start", // 세로
  },
  text: {
    color: '#000000',
    fontSize: 26,
    fontStyle: 'italic',
    fontWeight: 'bold',
    margin: 10,
    // textTransform: 'uppercase',
  },
  text_input: {
    borderWidth: 2,
    borderColor: '#777',
    width: '80%',
    textAlign: 'center',
    fontSize: 15,
  },
});

export default App