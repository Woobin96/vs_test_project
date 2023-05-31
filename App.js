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
    <View style={styles.top_body}>
      
      <View style={styles.body}>
        <View style={styles.row}>

          <View style={styles.view1}>
            <Text style={styles.text}>1</Text>
          </View>

          <View style={styles.view2}>
            <Text style={styles.text}>2</Text>
          </View>

          <View style={styles.view3}>
            <Text style={styles.text}>3</Text>
          </View>

        </View>

        <View style={styles.row}>
          <View style={styles.view4}>
            <Text style={styles.text}>4</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.view5}>
            <Text style={styles.text}>5</Text>
          </View>
        </View>

        <View style={styles.big_row}>
          <View style={styles.view6}>
            <Text style={styles.text}>6</Text>
          </View>

          <View style={styles.view7}>
            <Text style={styles.text}>7</Text>
          </View>

        </View>

      </View>
    </View>
  )

}

const styles = StyleSheet.create({
  top_body: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: "center",
  },
  body: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: "center",
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  big_row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  view1: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view2: {
    flex: 2,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view3: {
    flex: 3,
    backgroundColor: '#ffff00',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view4: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view5: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view6: {
    flex: 1,
    backgroundColor: '#4641D9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view7: {
    flex: 1,
    backgroundColor: 'violet',
    alignItems: 'center',
    justifyContent: 'center',
  },

  // ---------------------------------------------------------------------------------//

  text: {
    color: '#000000',
    fontSize: 35,
    fontStyle: 'italic',
    fontWeight: 'bold',
    margin: 10,
    /**
     * textTransform:'uppercase' 대문자로 변경
     * textTransform:'lowercase' 소문자로 변경
     * textTransform:'capitalize' 앞에 대문자로 변경
     * textTransform:'none' 변경 없음
     * https://reactnative.dev/docs/text-style-props#texttransform
     */
    textTransform: 'uppercase',
  },
});

export default App