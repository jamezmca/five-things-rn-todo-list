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
    const [enteredTodo, setEnteredTodo] = useState([]);

    useEffect(() => {
        setEnteredTodo([props.content.value, props.content.valueDescription || ''])
    },[props.visible])

    const todoEditTitleHandler = (enteredText) => {
        setEnteredTodo([`${enteredText}`, enteredTodo[1]]);
    };

    const todoEditDescriptionHandler = (enteredText) => {
        setEnteredTodo([enteredTodo[0] ,`${enteredText}`]);
    };

    function editTodoHandler() {
        props.onEditTodo(enteredTodo);
    }

    return (
        <Modal visible={props.visible} animationType="fade" transparent={true}>
            <View style={styles.modalScreen}>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.inputTitle}
                        onChangeText={todoEditTitleHandler}
                        value={enteredTodo[0]}
                        multiline={true}
                        underlineColorAndroid="transparent"
                    />
                    <TextInput
                        style={styles.inputDescription}
                        onChangeText={todoEditDescriptionHandler}
                        placeholder="description..."
                        placeholderTextColor='white'
                        value={enteredTodo[1]}
                        multiline={true}
                        underlineColorAndroid="transparent"
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="edit" color={Colors.darkerGrey} onPress={editTodoHandler} />
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
        backgroundColor: Colors.darkGrey,
        borderColor: Colors.greenB,
        borderWidth: 1,
        margin: 15,
        flex: 1, 
        borderRadius: 5
    }
});

export default EditInput;
