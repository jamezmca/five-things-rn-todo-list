// welcome to my dope swag app
import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  Alert,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import TodoInput from './components/TodoInput';
import AddButton from './components/AddButton';
import Colors from './components/Colors'
import EditInput from './components/EditInput'
import TextStyles from './components/TextStyles'
import { Ionicons } from '@expo/vector-icons';
import Overhaul from './components/Overhaul';
import ViewOne from './components/ViewOne'
import ViewTwo from './components/ViewTwo'
import ViewThree from './components/ViewThree'

function fetchFonts() {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-medium': require('./assets/fonts/friz-quadrata-std-medium.otf'),
    'open-sans-bold': require('./assets/fonts/LifeCraft_Font.ttf')
  });
};

export default function App() {
  const [todoList, setTodoList] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [editContent, setEditContent] = useState([])
  const [showDelete, setShowDelete] = useState(false)

  const storeData = async () => {
    if (todoList == []) return
    try {
      const jsonValue = JSON.stringify(todoList)
      await AsyncStorage.setItem('@storage_Key', jsonValue)
    } catch (e) {
      console.log(e)
    }
  }

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@storage_Key')
      if (jsonValue != null) return setTodoList(JSON.parse(jsonValue))
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  useEffect(() => {
    storeData()
  }, [todoList])


  if (!dataLoaded) {
    return <AppLoading
      startAsync={fetchFonts}
      onFinish={() => setDataLoaded(true)}
      onError={(err) => console.log(err)}
    />;
  };

  const addTodoHandler = (todo) => {
    if (todo[0].length === 0) {
      return;
    };
    setTodoList(currentTodos => [...todoList, { id: (todoList.length), value: todo[0], valueDescription: todo[1] || '' }]);
    setIsAddMode(false);
  };

  function editTodoHandler(todo) {
    if (todo[0].length === 0) {
      return removeTodo(editContent)
    }
    let newArr = todoList.map((e) => editContent.id === e.id ? { id: editContent.id, value: todo[0], valueDescription: todo[1] || '' } : e)
    setTodoList(newArr)
    setIsEditMode(false)
  }

  function cancelTodoAdditionHandler() {
    setIsAddMode(false);
  };

  function removeTodo(props) {
    let secondArray = todoList.reduce((newList, todo) => {
      todo.id !== props.id && newList.push({ id: newList.length, value: todo.value, valueDescription: todo.valueDescription })
      return newList
    }, [])
    setTodoList(secondArray)
    setIsEditMode(false)
  }

  const rowTwoFlex = showDelete ? 2 : 3
  // HERE BEGINS THE RETURN IF YOU'RE READING THROUGH AND GET LOST THIS IS WHERE THE RENDER JSX IS MY HOMIE UR WELCOME!!!
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.screen}>
        <TodoInput visible={isAddMode} onAddTodo={addTodoHandler} onCancel={cancelTodoAdditionHandler} />
        <EditInput visible={isEditMode} onEditTodo={editTodoHandler} content={editContent} />
        <View style={styles.header}>
          <Text style={styles.headerText}>5do.</Text>
          <TouchableOpacity onPress={() => { setShowDelete(!showDelete) }}><Text style={showDelete ? TextStyles.deleteRed : TextStyles.deleteGreen}>overhaul</Text></TouchableOpacity>
        </View>

        <View style={styles.containers}>

          {/*CONTAINER ONE CONTAINER ONE CONTAINER ONE CONTAINER ONE */}
          <View style={styles.containerUno}>
            {todoList.length > 0 &&
              <View style={{ flexDirection: 'row', flex: 1 }}>
                <ViewOne setEditContent={setEditContent} setIsEditMode={setIsEditMode} todoList={todoList}>{todoList[0]}</ViewOne>
                <Overhaul id={todoList[0]?.id} todoList={todoList} setTodoList={setTodoList} showDelete={showDelete} />
              </View>}

            {todoList.length > 1 && <Text style={{ color: Colors.greenC, alignSelf: 'center', fontSize: 30 }}>. . . . .</Text>}
          </View>

          {/*CONTAINER TWO CONTAINER TWO CONTAINER TWO CONTAINER TWO */}
          <View style={styles.containerDos}>
            {todoList.length > 1 &&
              <View style={{ flexDirection: 'row', flex: 1 }}>
                <ViewTwo setEditContent={setEditContent} setIsEditMode={setIsEditMode} todoList={todoList}>{todoList[1]}</ViewTwo>
                <Overhaul id={todoList[1]?.id} todoList={todoList} setTodoList={setTodoList} showDelete={showDelete} />
              </View>}
            {todoList.length > 2 && <Text style={{ color: Colors.greenC, alignSelf: 'center', fontSize: 30 }}>. . .</Text>}
          </View>

          <View style={styles.lastThreeContainerContainer}>
            {showDelete && todoList.length > 2 && <View style={{ flexDirection: 'row' }}>
              {todoList.length > 2 ? <Overhaul id={todoList[2]?.id} todoList={todoList} setTodoList={setTodoList} showDelete={showDelete} /> : <View style={{ flex: 1 }}></View>}
              {todoList.length > 3 ? <Overhaul id={todoList[3]?.id} todoList={todoList} setTodoList={setTodoList} showDelete={showDelete} /> : <View style={{ flex: 1 }}></View>}
              {todoList.length > 4 ? <Overhaul id={todoList[4]?.id} todoList={todoList} setTodoList={setTodoList} showDelete={showDelete} /> : <View style={{ flex: 1 }}></View>}
            </View>}
            {/* CONTAINER OF CONTAINER THREE FOUR AND FIVE CONTAINER OF CONTAINER THREE FOUR AND FIVE */}
            <View style={styles.lastThreeContainer}>
              {/*CONTAINER THREE CONTAINER THREE CONTAINER THREE CONTAINER THREE */}
              <View style={styles.containerTres}>
                {todoList.length > 2 &&
                  <View style={{ flex: 1 }}>
                    <ViewThree setEditContent={setEditContent} setIsEditMode={setIsEditMode} todoList={todoList}>{todoList[2]}</ViewThree>
                  </View>}
              </View>

              {/*CONTAINER FOUR CONTAINER FOUR CONTAINER FOUR CONTAINER FOUR */}
              <View style={styles.containerQuatro}>
                {todoList.length > 3 &&
                  <View style={{ flex: 1 }}>
                    <ViewThree setEditContent={setEditContent} setIsEditMode={setIsEditMode} todoList={todoList}>{todoList[3]}</ViewThree>
                  </View>}
              </View>

              {/*CONTAINER FIVE CONTAINER FIVE CONTAINER FIVE CONTAINER FIVE */}
              {todoList.length > 4 ?
                <View style={styles.containerCinco}>
                  <View style={{ flex: 1 }}>
                    <ViewThree setEditContent={setEditContent} setIsEditMode={setIsEditMode} todoList={todoList}>{todoList[4]}</ViewThree>
                  </View>
                </View> :
                <View style={styles.buttonContainer}>
                  <AddButton onPress={() => { setIsAddMode(true) }}>+</AddButton>
                </View>}
            </View>
          </View>
        </View>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
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
    marginTop: 5
  },
  containerDos: {
    flex: 4,
    marginTop: 5
  },
  lastThreeContainerContainer: {
    flex: 3,
  },
  lastThreeContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  containerTres: {
    flex: 1,
  },
  containerQuatro: {
    flex: 1,
    marginHorizontal: 3
  },
  containerCinco: {
    flex: 1,
  }
});
