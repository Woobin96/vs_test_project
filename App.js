import React, { Component, useState } from 'react';
import {
  Button,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
// 코드 자동 정렬 : Shift + Alt + F
const App = () => {

const a = 0;

  const [Items, setItems] = useState([
    { key: 1, Items: 'Items 1' },
    { key: 2, Items: 'Items 2' },
    { key: 3, Items: 'Items 3' },
    { key: 4, Items: 'Items 4' },
    { key: 5, Items: 'Items 5' },
    { key: 6, Items: 'Items 6' },
    { key: 7, Items: 'Items 7' },
    { key: 8, Items: 'Items 8' },
    { key: 9, Items: 'Items 9' },
    { key: 10, Items: 'Items 10' },
    { key: 11, Items: 'Items 11' },
  ]);

  const [Ref, setRef] = useState(false);

  const onRefresh = () => {
    setRef(true);
    // "..." 배열끝에 붙히기 세개의 점
    setItems([...Items, { key: a + 1, Items: 'Items 12' }]);
    console.log(a);
    setRef(false);
  }


  // jsx 는 view 안에 js 를 사용 가능 map() 안에 함수 아무거나 써도댐
  // ScrollView 사용 할 떄 View 자체를 빼도 댐
  return (
    // <View style={styles.body}>
    <ScrollView
      style={styles.body}
      refreshControl={
        <RefreshControl
          refreshing={Ref}
          onRefresh={onRefresh}
          colors={['#ffffaa']}

        />
      }

    >

      {
        Items.map((iiii) => {
          return (
            <View style={styles.item} key={iiii.key}>
              <Text style={styles.text}>{iiii.Items}</Text>
            </View>
          )
        })
      }
    </ScrollView>
    // </View>
  )

}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    // alignItems: 'center', // 가로
    // justifyContent: "flex-start", // 세로
  },
  item: {
    margin: 12,
    backgroundColor: '#86E57F',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#000000',
    fontSize: 45,
    fontStyle: 'italic',
    fontWeight: 'bold',
    margin: 10,
    textTransform: 'uppercase',
  },
});

export default App