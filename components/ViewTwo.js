import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import Colors from './Colors'
import Overhaul from './Overhaul'
import TextStyles from './TextStyles'

const ViewTwo = ({ setEditContent, setIsEditMode, children, todoList }) => {
    return (
        <View style={TextStyles.containerContent}>
            <TouchableOpacity onPress={() => {
                setEditContent(() => todoList[children.id])
                setIsEditMode(true)
            }} style={{ flex: 1, paddingTop: 2 }}>
                <Text style={styles.titleText}>
                    {children.value}
                </Text>
                <Text style={styles.descriptionText}>
                    {children.valueDescription}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    titleText: {
        color: Colors.greenYellow,
        fontSize: 25,
        fontFamily: 'open-sans-bold',
        marginBottom: 5
    },
    descriptionText: {
        color: Colors.greenYellow,
        fontSize: 15,
        fontFamily: 'open-sans-medium'
    }
})

export default ViewTwo
