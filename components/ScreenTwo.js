import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const ScreenTwo = (todoList) => {
    return (
        <div>
            <View style={styles.screenTwoA}>
                <View>
                    <Text>{todoList.title}</Text>
                </View>
                <View>
                    <Text>{todoList.description}</Text>
                </View>
            </View>
            <View style={styles.screenTwoB}>
                <View>
                    <Text>{todoList.title}</Text>
                </View>
                <View>
                    <Text>{todoList.description}</Text>
                </View>
            </View>
        </div>
    )
}

const styles = StyleSheet.create({
    screenTwoA: {

    },
    screenTwoB: {

    }
})


export default ScreenTwo
