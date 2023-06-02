import React, { Component, useState } from 'react';
import {
  Button,
  FlatList,
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
    { name: 'Items 1' },
    { name: 'Items 2' },
    { name: 'Items 3' },
    { name: 'Items 4' },
    { name: 'Items 5' },
    { name: 'Items 6' },
    { name: 'Items 7' },
    { name: 'Items 8' },
    { name: 'Items 9' },
    { name: 'Items 10' },
    { name: 'Items 11' },
  ]);
  const DATA = [
    {
      title: 'Title 1',
      data: ['Item 1-1', 'Item 1-2'],
    },
    {
      title: 'Title 2',
      data: ['Item 2-1'],
    },
    {
      title: 'Title 3',
      data: ['Item 3-1', 'Item 3-2'],
    },

  ]

  const [Ref, setRef] = useState(false);

  const onRefresh = () => {
    setRef(true);
    // "..." 배열끝에 붙히기 세개의 점
    setItems([...Items, { name: 'Items 123' }]);
    console.log(a);
    setRef(false);
  }


  // jsx 는 view 안에 js 를 사용 가능 map() 안에 함수 아무거나 써도댐
  // ScrollView 사용 할 떄 View 자체를 빼도 댐
  return (

    // horizontal 가로 스크롤이 되게 하는거임 
    // inverted 역으로 정리 해주는거임
    <FlatList
      // horizontal
      // inverted
      // numColumns={2} // 표시하는 개수 기본 1개 
      keyExtractor={(item, index) => index.toString()}
      data={Items}
      // 괄호 -> 중괄호 안에 넣어야함 ({item}) 함수는 무조건 item 인듯 ㅇㅇ 
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Text style={styles.text}>{item.name}</Text>
        </View>
      )}
      refreshControl={
        <RefreshControl
          refreshing={Ref}
          onRefresh={onRefresh}
          colors={['red']}
        />
      }
    />
    // <View style={styles.body}>
    // <ScrollView
    //   style={styles.body}
    //   refreshControl={
    //     <RefreshControl
    //       refreshing={Ref}
    //       onRefresh={onRefresh}
    //       colors={['#ffffaa']}
    //     />
    //   }

    // >

    //   {
    //     Items.map((iiii) => {
    //       return (
    //         <View style={styles.item} key={iiii.key}>
    //           <Text style={styles.text}>{iiii.Items}</Text>
    //         </View>
    //       )
    //     })
    //   }
    // </ScrollView>
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