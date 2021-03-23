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

  const screenChooser = (length) => {
    if (length === 0) {
      return;
    } else if (length === 1) {
      return <ScreenOne todoList={todoList}/>
    } else if (length === 2) {
      return <ScreenTwo todoList={todoList}/>
    } else if (length === 3) {
      return <ScreenThree todoList={todoList}/>
    } else if (length === 4) {
      return <ScreenFour todoList={todoList}/>
    } else {
      return <ScreenFive todoList={todoList}/>
    }
  }

  return (
    <View style={styles.screen}>
      {/*use three different flex views to fit conent and adjust heights of each view */}
      <View style={styles.header}>
        <Text style={{ color: '#90e0ef', fontSize: 20 }}>5do.</Text>
        <View style={{ width: '20%' }}>
          <Button title="+" color='#144552' onPress={() => setIsAddMode(true)} />
        </View>
        <TodoInput visible={isAddMode} onAddTodo={addTodoHandler} onCancel={cancelTodoAdditionHandler} />
      </View>
      <View style={styles.containers}>
        {/* THIS WILL LIKELY MAP OVER THE ARRAY AND DEPENDING ON THE LENGTH WILL DISPLAY A DIFFERENT OUTPUT
        <View style={styles.containerUno}>

        </View>
        <View style={styles.containerDos}>
          
        </View>
        <View style={styles.containerTres}>
          
  </View>*/}
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
    backgroundColor: 'hsl(291, 30%, 6%)',
    alignItems: 'center',
    padding: 20,
    paddingTop: 50
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    borderBottomColor: '#48cae4',
    borderBottomWidth: 2,
    paddingBottom: 3
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
