import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const ScreenThree = (todoList) => {
    return (
        <div>
            <View style={styles.screenThreeA}>
                <View>
                    <Text>{todoList.title}</Text>
                </View>
                <View>
                    <Text>{todoList.description}</Text>
                </View>
            </View>
            <View style={styles.screenThreeB}>
                <View>
                    <Text>{todoList.title}</Text>
                </View>
                <View>
                    <Text>{todoList.description}</Text>
                </View>
            </View>
            <View style={styles.screenThreeC}>
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
    screenThreeA: {

    },
    screenThreeB: {

    },
    screenThreeC: {
        
    }
})


export default ScreenThree
