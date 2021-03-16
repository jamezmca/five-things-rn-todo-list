import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native';

export default function App() {
  const [todoList, setTodoList] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  return (
    <View style={styles.container}>
      {/*use three different flex views to fit conent and adjust heights of each view */}
      <Text>5 Things</Text>
      <View style={styles.containers}></View>
      <View style={styles.containerUno}><Text>Open up App.js to start working on your app!</Text></View>
      <View style={styles.containerDos}><Text>Open up App.js to start working on your app!</Text></View>
      <View style={styles.containerTres}><Text>Open up App.js to start working on your app!</Text></View>
      <StatusBar style="auto" />
    </View>
  );
};

// color combo dark dark blue background with dark purple 
//cards and light pink box shadow and white text

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containers: {

  },
  containerUno: {
    flex: 3,
    borderColor: 'black',
    borderBottomWidth: 2
  },
  containerDos: {
    flex: 2,
  },
  containerTres: {
    flex: 1,
  }
});
