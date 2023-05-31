import React , {Component, useState}from 'react'; 
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

const App = () => {


  return(
    <View style={styles.body}>
      <Text style={styles.text}>test</Text>
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

export default App