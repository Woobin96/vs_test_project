/**
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

const App = () => {
  return (
    <View>
      <Text style={styles.text}>HELLOOOOOOOOOOOO</Text>  
    </View>
  );
  
}

const styles = StyleSheet.create({
  text : {
    color : 'black',
    fontSize : 30,
  },

});

export default App;
