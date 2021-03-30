import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  Alert,
  TouchableOpacity,
  SafeAreaView
} from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import TodoInput from './components/TodoInput';
import AddButton from './components/AddButton';
import Colors from './components/Colors'
import EditInput from './components/EditInput'

//add drag and drop functionality later
// on long press be able to drag to recycle bin and short press can edit
// add an undo button too

//[true, id, title, description], [true, id, title, description]....]
function fetchFonts() {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/LifeCraft_Font.ttf')
  });
};

export default function App() {
  const [todoList, setTodoList] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [editContent, setEditContent] = useState('')


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
    setTodoList(currentTodos => [...todoList, { id: Math.random().toString(), value: todoTitle }]);
    setIsAddMode(false);
  };

  function editTodoHandler(todoTitle) {


    setIsEditMode(false)
  }

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
      <View style={styles.header}>
        <Text style={styles.headerText}>5do.</Text>
        <TodoInput visible={isAddMode} onAddTodo={addTodoHandler} onCancel={cancelTodoAdditionHandler} />
        <EditInput visible={isEditMode} onEditTodo={editTodoHandler} title={editContent}/>
      </View>

      <View style={styles.containers}>
        <View style={styles.containerUno}>
          {todoList.length > 0 &&
            <TouchableOpacity onPress={() => {
              setEditContent(todoList[0].value)
              setIsEditMode(true)
            }}>
              <Text style={{ color: Colors.greenYellow, fontSize: 30, fontFamily: 'open-sans-bold' }}>
                {todoList[0].value.toUpperCase()}
              </Text>
            </TouchableOpacity>}
        </View>

        <View style={styles.containerDos}>
          {todoList.length > 1 &&
            <Text style={{ color: Colors.greenYellow, fontSize: 25, fontFamily: 'open-sans-bold' }}>
              {todoList[1].value.toUpperCase()}
            </Text>}
        </View>

        <View style={styles.lastThreeContainer}>
          <View style={styles.containerTres}>
            {todoList.length > 2 &&
              <Text style={{ color: Colors.greenYellow, fontSize: 18, fontFamily: 'open-sans-bold' }}>
                {todoList[2].value.toUpperCase()}
              </Text>}
          </View>

          <View style={styles.containerQuatro}>
            {todoList.length > 3 &&
              <Text style={{ color: Colors.greenYellow, fontSize: 18, fontFamily: 'open-sans-bold' }}>
                {todoList[3].value.toUpperCase()}
              </Text>}
          </View>
          {
            todoList.length > 4 ?
              <View style={styles.containerCinco}>
                <Text style={{ color: Colors.greenYellow, fontSize: 18, fontFamily: 'open-sans-bold' }}>
                  {todoList[4].value.toUpperCase()}
                </Text>
              </View> :
              <View style={styles.buttonContainer}>
                <AddButton onPress={() => { setIsAddMode(true) }}>+</AddButton>
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
    borderBottomWidth: 1,
    paddingBottom: 3,
  },
  headerText: {
    fontSize: 45,
    color: Colors.greenF,
    fontFamily: 'open-sans-bold'
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
    borderColor: 'white',
    display: 'flex',

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
