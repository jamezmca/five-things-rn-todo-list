import React, { useState } from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet,
    TextInput,
    Modal
} from 'react-native';

const TodoInput = props => {
    const [enteredTodo, setEnteredTodo] = useState('');
    //const [enteredTodoDescription, setEnteredTodoDescription] = useState('');
    // come back and make multiline description with enteredtodotitle
    //
    const todoInputTitleHandler = (enteredText) => {
        setEnteredTodo(enteredText);
    };

    // const todoInputDescriptionHandler = (enteredText) => {
    //     setEnteredTodo(enteredText);
    // };

    function addTodoHandler() {
        props.onAddTodo(enteredTodo);
        setEnteredTodo('');
    }

    return (
        <Modal visible={props.visible} animationType="fade" transparent={true}>
            <View style={styles.modalScreen}>
                <View style={styles.inputContainer}>
                    <TextInput
                        placeholder="Title..."
                        placeholderTextColor='white'
                        style={styles.inputTitle}
                        onChangeText={todoInputTitleHandler}
                        value={enteredTodo}
                        multiline={true}
                        underlineColorAndroid="transparent"

                    />
                    {/*<TextInput
                    placeholder="Description..."
                    style={styles.inputDescription}
                    onChangeText={todoInputDescriptionHandler}
                    value={enteredTodo}
                />*/}
                </View>
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="cancel" color="#80b918" onPress={props.onCancel} />
                    </View>
                    <View style={styles.button}>
                        <Button title="add" color="#80b918" onPress={addTodoHandler} />
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

    },
    buttonContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderTopWidth: 2,
        borderTopColor: 'green',
        paddingVertical: 5,
        marginHorizontal: 20,
        flex: 1
    },
    button: {
        width: 100,

    },
    modalScreen: {
        backgroundColor: 'hsl(230, 100%, 3%)',
        borderColor: 'hsla(90, 100%, 50%, 0.9)',
        borderWidth: 3,
        margin: 10,
        flex: 1
    }
});

export default TodoInput;
