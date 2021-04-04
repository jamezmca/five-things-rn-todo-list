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
import TextStyles from './components/TextStyles'

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
  const [toBeDeletedID, setToBeDeletedID] = useState('')


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
    setTodoList(currentTodos => [...todoList, { id: (todoList.length).toString(), value: todoTitle }]);
    setIsAddMode(false);
  };

  function editTodoHandler(todoTitle) {
    let newArr = todoList.map((e) => editContent.id === e.id ? { id: editContent.id, value: todoTitle } : e)
    setTodoList(newArr)
    setIsEditMode(false)
  }

  const DeleteButton = (props) => {
    console.log(props.id)
    return (
      <TouchableOpacity onPress={() => {
        setTodoList(todolist => {
          return todoList.filter((todo) => todo.id !== props.id)
        })
      }}>
        <Text style={TextStyles.minus}>x</Text>
      </TouchableOpacity>
    )
  }

  function cancelTodoAdditionHandler() {
    setIsAddMode(false);
  };


  return (
    <View style={styles.screen}>
      <TodoInput visible={isAddMode} onAddTodo={addTodoHandler} onCancel={cancelTodoAdditionHandler} />
      <EditInput visible={isEditMode} onEditTodo={editTodoHandler} title={editContent} />
      <View style={styles.header}>
        <Text style={styles.headerText}>5do.</Text>
        <TouchableOpacity onPress={() => { }}><Text style={TextStyles.delete}>delete</Text></TouchableOpacity>
      </View>

      <View style={styles.containers}>
        <View style={styles.containerUno}>
          {todoList.length > 0 &&
            <TouchableOpacity onPress={() => {
              setEditContent(() => todoList[0])
              setIsEditMode(true)
            }}>
              <Text style={{ color: Colors.greenYellow, fontSize: 30, fontFamily: 'open-sans-bold' }}>
                {todoList[0].value.toUpperCase()}
              </Text>
            </TouchableOpacity>}
          <DeleteButton id={todoList[0]?.id} />
        </View>

        <View style={styles.containerDos}>
          {todoList.length > 1 &&
            <TouchableOpacity onPress={() => {
              setEditContent(() => todoList[1])
              setIsEditMode(true)
            }}>
              <Text style={{ color: Colors.greenYellow, fontSize: 25, fontFamily: 'open-sans-bold' }}>
                {todoList[1].value.toUpperCase()}
              </Text>
            </TouchableOpacity>}
        </View>

        <View style={styles.lastThreeContainer}>
          <View style={styles.containerTres}>
            {todoList.length > 2 &&
              <TouchableOpacity onPress={() => {
                setEditContent(() => todoList[2])
                setIsEditMode(true)
              }}>
                <Text style={{ color: Colors.greenYellow, fontSize: 18, fontFamily: 'open-sans-bold' }}>
                  {todoList[2].value.toUpperCase()}
                </Text>
              </TouchableOpacity>}
          </View>

          <View style={styles.containerQuatro}>
            {todoList.length > 3 &&
              <TouchableOpacity onPress={() => {
                setEditContent(() => todoList[3])
                setIsEditMode(true)
              }}>
                <Text style={{ color: Colors.greenYellow, fontSize: 18, fontFamily: 'open-sans-bold' }}>
                  {todoList[3].value.toUpperCase()}
                </Text>
              </TouchableOpacity>}
          </View>
          {
            todoList.length > 4 ?
              <View style={styles.containerCinco}>
                <TouchableOpacity onPress={() => {
                  setEditContent(() => todoList[4])
                  setIsEditMode(true)
                }}>
                  <Text style={{ color: Colors.greenYellow, fontSize: 18, fontFamily: 'open-sans-bold' }}>
                    {todoList[4].value.toUpperCase()}
                  </Text>
                </TouchableOpacity>
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
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 60,
    color: Colors.darkGrey,
    fontFamily: 'open-sans-bold',
    textShadowColor: Colors.greenF,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 20,
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
