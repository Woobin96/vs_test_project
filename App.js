import React, { Component, useState } from 'react';
import {
  Alert,
  Button,
  FlatList,
  Pressable,
  RefreshControl,
  ScrollView,
  SectionList,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
// 코드 자동 정렬 : Shift + Alt + F
const App = () => {


  const [Name, setName] = useState('??');
  const [Sumit, setSumit] = useState(false);
  const onPressHander = () => {
    if (Name.length > 3) {
      setSumit(!Sumit);
    }
    else {
      // Alert.alert('Error', '3자 이상 입력해주세요', [
      //   // {text: 'OK', onPress:()=>console.warn('okokoko')} // onPress:()=>console.warn (android = 토스트 같은거임)
      //   { text: '다시 표시 안함' },
      //   { text: 'Cancel' },
      //   { text: 'OK' },
      // ],
      //   { cancelable: true, onDismiss: () => console.warn('qweqwe') } // 다이얼로그 아니여도 다른곳 터치시 닫게 하는거 onDismiss: () => console.warn = (android = 토스트 같은거임)
      // );

      ToastAndroid.show('error', ToastAndroid.SHORT) // android 에서만 사용가능한 토스트임 (react native 전용)
    }
  }


  // jsx 는 view 안에 js 를 사용 가능 map() 안에 함수 아무거나 써도댐
  // ScrollView 사용 할 떄 View 자체를 빼도 댐
  return (
    <View style={styles.body}>
      <Text style={styles.text}>your name ?</Text>
      <TextInput
        // keyboardType='' // 키보드 타입 정하는거
        // maxLength={3} // input max 입력개수
        // editable={false} // 활성 / 비활성
        // secureTextEntry // 비밀번호
        style={styles.text_input}
        placeholder='nameing'
        onChangeText={(value) => setName(value)}
      />
      {/* 흥히 사용하는 버튼 컬러변경 ok 눌렀을때 변경 안되서 다른 버튼을 사용할거 같음  */}
      {/* <Button
        title={Sumit ? 'clear' : 'Enter'}
        onPress={onPressHander}
        // disabled={Sumit} // 활성화 비활성화 처리
        color='#00ff12'
      /> */}

      {/* TouchableOpacity는 클릭시 불투명도를 줄이는 클릭 가능한 뷰 
          activeOpacity 의해 결정 기본 0.2
      */}
      {/* <TouchableOpacity
        onPress={onPressHander}
        style={styles.btn}
        activeOpacity = {0.6}
      >
        <Text style={styles.text}>{Sumit ? 'Clear' : 'Sumit'}</Text>
      </TouchableOpacity> */}

      {/* 
        클릭시 검정색으로 됨
        underlayColor 로 클릭시 색 변경 가능
      */}
      {/* <TouchableHighlight
        onPress={onPressHander}
        style={styles.btn}
        activeOpacity = {0.5}
        underlayColor='#2C8B25'
      >
        <Text style={styles.text}>{Sumit ? 'Clear' : 'Sumit'}</Text>
      </TouchableHighlight> */}

      {/* 
        스타일 허용 X
        내부의 보기를 사용하여 스타일 지정 가능 ex) view 만들어서 하는것
        깔끔하고 깨끗한 버튼 쓸 때 괜찮을거 같긴 함
      */}
      {/* <TouchableWithoutFeedback
        onPress={onPressHander}
        style={styles.btn}
        activeOpacity = {0.5}
        underlayColor='#2C8B25'
      >
        <Text style={styles.text}>{Sumit ? 'Clear' : 'Sumit'}</Text>
      </TouchableWithoutFeedback> */}

      {/* 
        Pressable 새로나온거라고 함 
        pressed 클릭한 상태를 알수있는것이라고 함
        https://reactnative.dev/docs/pressable#example
        onLongPress - 롱클릭
      */}
      <Pressable
        onPress={onPressHander}
        hitSlop={{ top: 10, bottom: 10, right: 10, left: 10 }} // 버튼 주변까지 클릭이 가능한거
        android_ripple={{ color: '#00f' }} // 클릭시 물결 같은 효과 
        style={({ pressed }) => [
          { backgroundColor: pressed ? '#078196' : '#61DBF0' },
          styles.btn
        ]}
      >
        <Text style={styles.text}>{Sumit ? 'Clear' : 'Sumit'}</Text>
      </Pressable>
      {Sumit ? <Text style={styles.text}>your name is ... {Name}</Text> : null}

    </View>

  );

};

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
    marginBottom: 12,

  },
  btn: {
    width: 150,
    height: 50,
    alignItems: 'center',
  },
});

export default App