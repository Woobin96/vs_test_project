import React , {Component, useState}from 'react'; 
import {
  Alert,
  Button,
  Linking,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

export default function App() {
  // const name = 'WooBin';

  const [count , setCount] = useState(0);

  const [current , setCurrent] = useState(true);
  const [name, setName] = useState('Koban');
  const [age, setAge] = useState({    
    number : 19,    
    title : 'GIMEIMG'  
  });

  function ButtonClickHandler() {
    setCount(count + 1);

    // name = 'asdasd';
    // Alert.alert('qwe');
    // setName('WooBin!!!!!!!!!!!!!!');
    // console.log("TEST!!!!!!!!!!!!!!"); 
    // // android 에서 로그처럼 확인할수있음 이제 저 로그는 Consol 에서만 확인이 가능함
    // setAge({
    //   number : 28,
    //   title : 'omg'
    // })
    // setCurrent(false);
  }

  return(
    <View style={styles.body}>
      {/* <Text style={styles.text}>My name is {name}</Text>
      <Text style={styles.text}>This is age {age.number} and {age.title}</Text>
      <Text style={styles.text}>{current ? 'true' : 'false'}</Text> */}
      <Text style={styles.text}>Count(5) {count * 5}</Text>
      <Button title='UP Count' onPress={ButtonClickHandler}></Button>
      <Text style={styles.text}>Count(1) {count}</Text>
    </View>
  )

}
// 위처럼 컴포넌트 사용

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#6799FF',
    alignItems:'center',
    justifyContent:'center',
  },
  text : {
    color : '#FFFFFF',
    fontSize : 24,
    fontStyle:'italic',
    margin : 24,
  },

});

// export default App