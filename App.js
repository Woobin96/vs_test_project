import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  return (

    <View>
      <Text>HELLOOOOOOOOOOOO</Text>


    </View>
  );
}

const styles = StyleSheet.create({
 
});

export default App;
