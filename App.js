import React, { Component, useState } from 'react';
import {
  Alert,
  Button,
  FlatList,
  Modal,
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
  Image,
  View,
  ImageBackground,
} from 'react-native';
import CustomButton from './src/CustomButton';
import Header from './src/Header';

// 코드 자동 정렬 : Shift + Alt + F
const App = () => {


  const [Name, setName] = useState('??');
  const [Sumit, setSumit] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);
  const onPressHander = () => {
    if (Name.length > 3) {
      setSumit(!Sumit);
    }
    else {
      setErrorMsg(true);
    }
  }


  // jsx 는 view 안에 js 를 사용 가능 map() 안에 함수 아무거나 써도댐
  // ScrollView 사용 할 떄 View 자체를 빼도 댐
  return (
    <ImageBackground
      style={styles.body}
      source={require('./assets/back.png')}
    >
      <Header />

      <Modal
        visible={errorMsg}
        onRequestClose={() => setErrorMsg(false)}
        transparent
        animationType='slide'
      >
        <View style={styles.msgbox}>
          <View style={styles.errormsg}>
            <View style={styles.errortitle}>
              <Text style={styles.text}>ERROR MSG !! </Text>
            </View>

            <View style={styles.error_body}>
              <Text style={styles.text}>3자 이상 입력바랍니다</Text>
            </View>
            <Pressable
              onPress={() => setErrorMsg(false)}
              android_ripple={{ color: '#999' }}
            >
              <Text style={styles.text}>OK</Text>
            </Pressable>

          </View>
        </View>
      </Modal >
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

      {/* 
        CustomButton 다른 클래스에서 가져오는 버튼 
       */}
      <CustomButton
        onPress={onPressHander}
        title={Sumit ? 'Clear' : 'Sumit'}
        color={'#61DBF0'}
      />

      <CustomButton
        onPress={onPressHander}
        title={'테스트 입니다.'}
        color={'#61D'}
        style={{ margin: 10, }}
      />

      {
        Sumit ?
          <View style={styles.body}>
            <Text style={styles.text}>your name is ... {Name}</Text>
            <Image
              source={require('./assets/done.png')}
              style={styles.img}
              resizeMode='stretch' // 이미지가 잘렸을때 하면 딱맞게 수정
            />
          </View>

          :
          // 점과 슬래시는 현재폴더에서 경로들 제공
          <Image
            source={require('./assets/error.png')}
            // source={{uri:'https://previews.123rf.com/images/jojoo64/jojoo641512/jojoo64151200496/49798962-%ED%95%9C%EA%B5%AD-%EA%B5%90%ED%86%B5-%EC%95%88%EC%A0%84-%ED%95%9C%EA%B5%AD%EA%B3%BC-%EC%84%9C%EC%96%91-%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EC%9D%98-%EB%8B%A8%EC%96%B4-%EC%9C%84%ED%97%98-%ED%91%9C%EC%A7%80%ED%8C%90%EC%9E%85%EB%8B%88%EB%8B%A4.jpg'}} // uri 로 함
            style={styles.img}
            resizeMode='stretch' // 이미지가 잘렸을때 하면 딱맞게 수정
          // blurRadius={15} // 블러처리 (흐리게)
          />
      }

    </ImageBackground >

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
    fontSize: 20,
    // fontStyle: 'italic',
    // fontWeight: 'bold',
    margin: 10,
    textAlign: 'center',
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
  msgbox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000099'
  },
  errormsg: {
    width: 300,
    height: 300,
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderRadius: 12,
  },
  errortitle: {
    backgroundColor: 'blue',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 9,
  },
  error_body: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 100,
    height: 100,
    marginTop: 16,
  },
});

export default App