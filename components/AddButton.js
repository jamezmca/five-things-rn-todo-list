import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TouchableNativeFeedback, Platform, StatusBar } from 'react-native'
import Colors from './Colors'


const AddButton = (props) => {
    let ButtonComponent = TouchableOpacity;

    return (
        <View style={styles.buttonContainer}>
            <ButtonComponent activeOpacity={0.6} onPress={props.onPress}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>{props.children}</Text>
                </View>

            </ButtonComponent>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: Colors.buttonBackground,
        paddingVertical: 12,
        paddingHorizontal: 12,
        borderRadius: 2,
        borderWidth: 2,
        borderColor: 'green',
        alignSelf: 'center',
        width: 75,
        height: 75,
        justifyContent: 'center'
    },
    buttonText: {
        color: Colors.buttonText,
        fontFamily: 'open-sans',
        fontSize: 40,
        alignSelf: 'center'
    },
    buttonContainer: {
        borderRadius: 2,
        overflow: 'hidden',
        display: 'flex',
    }
})

export default AddButton;
