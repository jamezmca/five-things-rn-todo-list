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
        backgroundColor: Colors.greenE,
        paddingVertical: 12,
        paddingHorizontal: 12,
        borderRadius: 7,
        borderWidth: 2,
        borderColor: Colors.purpleA,
        alignSelf: 'center',
        width: 75,
        height: 75,
        justifyContent: 'center'
    },
    buttonText: {
        color: 'black',
        fontFamily: 'open-sans',
        fontSize: 40,
        alignSelf: 'center',
        textShadowColor: Colors.greenF,
        textShadowOffset: { width: 0, height: 0 },
        textShadowRadius: 15,
    },
    buttonContainer: {
        overflow: 'hidden',
        display: 'flex',
    }
})

export default AddButton;
