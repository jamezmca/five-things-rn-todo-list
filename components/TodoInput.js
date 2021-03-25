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
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Title..."
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
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="cancel" color="pink" onPress={props.onCancel} />
                    </View>
                    <View style={styles.button}>
                        <Button title="add" color="pink" onPress={addTodoHandler} />
                    </View>
                </View>
            </View>
        </Modal>
    )
};

const styles = StyleSheet.create({
    inputContainer: {
        margin: 10,
        flex: 1,
        height: 30,
        backgroundColor: 'hsl(230, 100%, 3%)',
        borderColor: 'hsla(90, 100%, 50%, 0.9)',
        borderWidth: 3
    },
    inputTitle: {
        color: 'white',
        fontSize: 30,
        padding: 30,
        borderBottomColor: 'blue'
    }
});

export default TodoInput;
