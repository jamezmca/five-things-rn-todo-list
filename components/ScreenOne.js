import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const ScreenOne = (todoList) => {
    return (
        <div>
            <View>
                <Text>{todoList.title}</Text>
            </View>
            <View>
                <Text>{todoList.description}</Text>
            </View>
        </div>
    )
}

const styles = StyleSheet.create({
    screenOneA: {

    }
  
})

export default ScreenOne
