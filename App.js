import React, { Component, useState } from 'react';
import {
  Button,
  FlatList,
  RefreshControl,
  ScrollView,
  SectionList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
// 코드 자동 정렬 : Shift + Alt + F
const App = () => {

  const [Sections, setSections] = useState([
    {
      title: 'Title 1',
      data: ['Item 1-1', 'Item 1-2'],
    },
  ]);

  const [Ref, setRef] = useState(false);

  const onRefresh = () => {
    setRef(true);
    const adding_index = Sections.length + 1;
    // "..." 배열끝에 붙히기 세개의 점
    setSections([...Sections,
    {
      title: 'Title ' + adding_index,
      data: [
        'Item ' + adding_index + '-1',
        'Item ' + adding_index + '-2',
      ]
    }
    ]);
    setRef(false);
  }


  // jsx 는 view 안에 js 를 사용 가능 map() 안에 함수 아무거나 써도댐
  // ScrollView 사용 할 떄 View 자체를 빼도 댐
  return (
    <SectionList
      keyExtractor={(item, index) => index.toString()}
      sections={Sections}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Text style={styles.text}>{item}</Text>
        </View>
      )}

      renderSectionHeader={({ section }) => (
        <View style={styles.header}>
          <Text style={styles.text}>{section.title}</Text>
        </View>
      )}
      refreshControl={
        <RefreshControl
          refreshing={Ref}
          onRefresh={onRefresh}
        
        />
      }

    />
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
  header: {
    backgroundColor: '#4ae1fa',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
  },
});

export default App