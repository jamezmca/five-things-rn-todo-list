import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView
} from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

function fetchFonts() {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });
};

export default function App() {
  const [todoList, setTodoList] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return <AppLoading
      startAsync={fetchFonts}
      onFinish={() => setDataLoaded(true)}
      onError={(err) => console.log(err)}
    />;
  };

  return (
    <View style={styles.screen}>
      {/*use three different flex views to fit conent and adjust heights of each view */}
      <Text>5 Things</Text>
      <View style={styles.containers}>
        <View style={styles.containerUno}><Text>Open up App.js to start working on your app!</Text></View>
        <View style={styles.containerDos}><Text>Open up App.js to start working on your app!</Text></View>
        <View style={styles.containerTres}><Text>Open up App.js to start working on your app!</Text></View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

// color combo dark dark blue background with dark purple 
//cards and light pink box shadow and white text

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 50
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
    borderColor: 'black',
    borderBottomWidth: 2
  },
  containerTres: {
    flex: 1,
    borderColor: 'black',
    borderBottomWidth: 2
  }
});
