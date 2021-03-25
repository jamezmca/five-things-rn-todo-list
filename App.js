import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  Alert
} from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import TodoInput from './components/TodoInput';
import ScreenOne from './components/ScreenOne';

//add drag and drop functionality later
// on long press be able to drag to recycle bin and short press can edit

//[true, id, title, description], [true, id, title, description]....]
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

  const addTodoHandler = todoTitle => {
    if (todoTitle.length === 0) {
      return;
    };
    // if (todoList.length > 2) {
    //   Alert.alert('Maximum of 5 todo items!', [{ text: 'Sorry!', style: 'cancel' }]);
    //   //setIsAddMode(false);
    //   return;
    // } else {
    setTodoList(currentTodos => [...todoList, { id: Math.random().toString(), value: todoTitle }]);
    //}
    console.log(todoList)
    setIsAddMode(false);
  };

  function removeTodoHandler(todoId) {
    setTodoList(currentTodos => {
      return currentTodos.filter((todo) => todo.id !== todoId)
    })
  };

  function cancelTodoAdditionHandler() {
    setIsAddMode(false);
  };

  return (
    <View style={styles.screen}>
      {/*use three different flex views to fit conent and adjust heights of each view */}
      <View style={styles.header}>
        <Text style={styles.headerText}>5do.</Text>

        <TodoInput visible={isAddMode} onAddTodo={addTodoHandler} onCancel={cancelTodoAdditionHandler} />
      </View>
      <View style={styles.containers}>
        {todoList.length === 0 && <View style={styles.zeroTextContainer}>
          <Button title="+" color='#144552' onPress={() => setIsAddMode(true)} />
        </View>}
        {todoList.length > 0 && <View style={styles.containerUno}></View>}
        {todoList.length > 1 && <View style={styles.containerDos}></View>}
        {todoList.length > 2 && <View style={styles.containerTres}></View>}



      </View>
      {todoList.length !== 0 &&
        <View style={styles.buttonContainer}>
          <Button title="+" color='#144552' onPress={() => setIsAddMode(true)} />
        </View>
      }
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
    backgroundColor: 'hsl(180, 30%, 4%)',
    alignItems: 'center',
    padding: 20,
    paddingTop: 50
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    borderBottomColor: '#b5e48c',
    borderBottomWidth: 2,
    paddingBottom: 3,
  },
  zeroTextContainer: {
    justifyContent: 'center',
    width: 200
  },
  zeroText: {
    color: 'white',
    padding: 10,
    fontSize: 20,
  },
  headerText: {
    fontSize: 30,
    color: '#7cfc00'
  },
  containers: {
    display: 'flex',
    flex: 1
  },
  buttonContainer: {
    width: 200
  }
});
