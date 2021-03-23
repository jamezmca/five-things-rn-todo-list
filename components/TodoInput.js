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
        <Modal visible={props.visible} animationType="fade">
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Title..."
                    style={styles.inputTitle}
                    onChangeText={todoInputTitleHandler}
                    value={enteredTodo}
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
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    }
});

export default TodoInput;
