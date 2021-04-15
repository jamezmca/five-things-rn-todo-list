import React, { useState } from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet,
    TextInput,
    Modal,
    ScrollView
} from 'react-native';
import Colors from './Colors'

const TodoInput = props => {
    const [enteredTodo, setEnteredTodo] = useState(['','']);
    //const [enteredTodoDescription, setEnteredTodoDescription] = useState('');
    // come back and make multiline description with enteredtodotitle
    //
    const todoInputTitleHandler = (enteredText) => {
        setEnteredTodo([`${enteredText}`, enteredTodo[1]]);
    };

    const todoInputDescriptionHandler = (enteredText) => {
        setEnteredTodo([enteredTodo[0], `${enteredText}`]);
    };

    function addTodoHandler() {
        props.onAddTodo(enteredTodo);
        setEnteredTodo(['','']);
    }

    function cancelTodoHandler() {
        props.onCancel()
        setEnteredTodo(['',''])
    }

    return (
        <Modal visible={props.visible} animationType="fade" transparent={true}>
            <View style={styles.modalScreen}>
                <View style={styles.inputContainer}>
                    <ScrollView>
                        <TextInput
                            placeholder="title..."
                            placeholderTextColor='white'
                            style={styles.inputTitle}
                            onChangeText={todoInputTitleHandler}
                            value={enteredTodo[0]}
                            multiline={true}
                            underlineColorAndroid="transparent"
                        />
                        <TextInput
                            placeholder="description..."
                            placeholderTextColor='white'
                            style={styles.inputDescription}
                            onChangeText={todoInputDescriptionHandler}
                            value={enteredTodo[1]}
                            multiline={true}
                            underlineColorAndroid="transparent"
                        />
                    </ScrollView>
                </View>
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="cancel" color={Colors.darkerGrey} onPress={cancelTodoHandler} />
                    </View>
                    <View style={styles.button}>
                        <Button title="add" color={Colors.darkerGrey} onPress={addTodoHandler} />
                    </View>
                </View>
            </View>
        </Modal>
    )
};

const styles = StyleSheet.create({
    inputContainer: {
        flex: 4,
        height: 30,
        elevation: 10,
    },
    inputTitle: {
        color: 'white',
        fontSize: 30,
        padding: 30,
        backgroundColor: 'transparent',
        marginVertical: 10,
        marginHorizontal: 5,
        borderRadius: 2,
        fontFamily: 'open-sans'
    },
    inputDescription: {
        color: 'white',
        fontSize: 15,
        paddingHorizontal: 30,
        backgroundColor: 'transparent',
        marginBottom: 10,
        marginHorizontal: 5,
        borderRadius: 2,
        fontFamily: 'open-sans'
    },
    buttonContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderTopWidth: 2,
        borderTopColor: Colors.greenF,
        paddingVertical: 5,
        marginHorizontal: 20,
        flex: 1
    },
    button: {
        width: 100,
    },
    modalScreen: {
        backgroundColor: Colors.darkesterGrey,
        borderColor: Colors.greenB,
        borderWidth: 1,
        margin: 15,
        flex: 1,
        borderRadius: 5
    }
});

export default TodoInput;
