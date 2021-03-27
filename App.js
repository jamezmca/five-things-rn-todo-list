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
import AddButton from './components/AddButton';

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
        <View style={styles.containerUno}></View>
        <View style={styles.containerDos}></View>
        <View style={styles.lastThreeContainer}>
          <View style={styles.containerTres}></View>
          <View style={styles.containerQuatro}></View>
          {todoList.length > 4 ?
            <View style={styles.containerCinco}></View> :
            <View style={styles.buttonContainer}>
                <AddButton onPress={() => setIsAddMode(true)}>+</AddButton>
            </View>
          }
        </View>
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
  headerText: {
    fontSize: 30,
    color: '#7cfc00'
  },
  containers: {
    display: 'flex',
    flex: 1,
    width: '100%'
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    fontSize: 30

  },
  containerUno: {
    flex: 5,
    borderWidth: 2,
    borderColor: 'white'
  },
  containerDos: {
    flex: 3,
    borderWidth: 2,
    borderColor: 'white'
  },
  lastThreeContainer: {
    display: 'flex',
    flex: 2,
    borderWidth: 2,
    borderColor: 'white',
    flexDirection: 'row'
  },
  containerTres: {
    flex: 1,
    borderWidth: 2,
    borderColor: 'white',
  },
  containerQuatro: {
    flex: 1,
    borderWidth: 2,
    borderColor: 'white',
  },
  containerCinco: {
    flex: 1,
    borderWidth: 2,
    borderColor: 'white',
  }
});
