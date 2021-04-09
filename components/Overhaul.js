import React from 'react'
import TextStyles from './TextStyles'
import {
    Text,
    TouchableOpacity,
    View,
    StyleSheet
} from 'react-native'
import { Ionicons } from '@expo/vector-icons';


const Overhaul = ({ id, todoList, setTodoList, showDelete }) => {
    const DeleteButton = ({ id }) => {
        return (
            <TouchableOpacity onPress={() => {
                let secondArray = todoList.reduce((newList, todo) => {
                    todo.id !== id && newList.push({ id: newList.length, value: todo.value })
                    return newList
                }, [])
                setTodoList(secondArray)
            }}>
                <Text style={{ ...TextStyles.minus }}><Ionicons name="close" size={30} /></Text>
            </TouchableOpacity>
        )
    }

    const DownArrow = ({ id }) => {
        if (id === 4) return null
        return (
            <TouchableOpacity onPress={() => {
                setTodoList(todoList.map((e) => {
                    return e.id === id ? { id: e.id, value: todoList[id + 1].value } : e.id === (id + 1) ? { id: e.id, value: todoList[id].value } : { id: e.id, value: e.value }
                }))
            }}>
                <Text style={{ ...TextStyles.upDown }}><Ionicons name="chevron-down-outline" size={30} /></Text>
            </TouchableOpacity>
        )
    }

    const UpArrow = ({ id }) => {
        if (id === 0) return null
        return (
            <TouchableOpacity onPress={() => {
                setTodoList(todoList.map((e) => {
                    return e.id === id ? { id: e.id, value: todoList[id - 1].value } : e.id === (id - 1) ? { id: e.id, value: todoList[id].value } : { id: e.id, value: e.value }
                }))
            }}>
                <Text style={{ ...TextStyles.upDown }}><Ionicons name="chevron-up-outline" size={30} /></Text>
            </TouchableOpacity>
        )
    }

    if (showDelete === false) return null

    return (
        <View style={styles.sideNav}>
            <View style={{flex: 1}}>
                <DeleteButton id={id} />
            </View>
            <View style={styles.navigation}>
                <UpArrow id={id} />
                <DownArrow />
                <DownArrow id={id} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    sideNav: {

    },
    navigation: {
        flex: 1,
    }
})

export default Overhaul
