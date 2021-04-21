import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Timer from './components/timer'

export default function App() {


  let lasttime = 1619028393352

  return (
    <View style={styles.container}>
      <Timer lasttime={lasttime}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
