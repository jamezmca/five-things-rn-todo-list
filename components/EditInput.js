import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet,
    TextInput,
    Modal
} from 'react-native';
import Colors from './Colors'

const EditInput = (props) => {
    const [enteredTodo, setEnteredTodo] = useState('');

    useEffect(() => {
        setEnteredTodo(props.title.value)
    },[props.visible])
    //const [enteredTodoDescription, setEnteredTodoDescription] = useState('');
    // come back and make multiline description with enteredtodotitle
    //
    const todoInputTitleHandler = (enteredText) => {
        setEnteredTodo(enteredText);
    };

    // const todoInputDescriptionHandler = (enteredText) => {
    //     setEnteredTodo(enteredText);
    // };

    function editTodoHandler() {
        props.onEditTodo(enteredTodo);
    }

    return (
        <Modal visible={props.visible} animationType="fade" transparent={true}>
            <View style={styles.modalScreen}>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.inputTitle}
                        onChangeText={todoInputTitleHandler}
                        value={enteredTodo}
                        multiline={true}
                        underlineColorAndroid="transparent"

                    />
                </View>
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="edit" color={Colors.purpleD} onPress={editTodoHandler} />
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
        borderTopWidth: 1,
        borderTopColor: Colors.greenE,
        paddingVertical: 5,
        marginHorizontal: 20,
        flex: 1
    },
    button: {
        width: 100,
    },
    modalScreen: {
        backgroundColor: Colors.purpleA,
        borderColor: Colors.greenG,
        borderWidth: 1,
        margin: 15,
        flex: 1
    }
});

export default EditInput;
