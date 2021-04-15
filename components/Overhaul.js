import React from 'react'
import TextStyles from './TextStyles'
import {
    Text,
    TouchableOpacity,
    View,
    StyleSheet
} from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import Colors from './Colors'


const Overhaul = ({ id, todoList, setTodoList, showDelete }) => {
    const DeleteButton = ({ id }) => {
        return (
            <TouchableOpacity onPress={() => {
                let secondArray = todoList.reduce((newList, todo) => {
                    todo.id !== id && newList.push({ id: newList.length, value: todo.value, valueDescription: todo.valueDescription })
                    return newList
                }, [])
                setTodoList(secondArray)
            }}>
                <Text style={styles.minus}><Ionicons name="close" size={30} /></Text>
            </TouchableOpacity>
        )
    }

    const DownArrow = ({ id }) => {
        if (id > 1) return null
        //if (id >= todoList.length - 1) return null
        return (
            <TouchableOpacity onPress={() => {
                if (id >= todoList.length - 1) return
                setTodoList(todoList.map((e) => {
                    return e.id === id ? { id: e.id, value: todoList[id + 1].value, valueDescription: todoList[id + 1].valueDescription } : e.id === (id + 1) ? { id: e.id, value: todoList[id].value, valueDescription: todoList[id].valueDescription } : { id: e.id, value: e.value, valueDescription: e.valueDescription }
                }))
            }}>
                <Text style={styles.upDown}><Ionicons name="chevron-down-outline" size={30} /></Text>
            </TouchableOpacity>
        )
    }

    const UpArrow = ({ id }) => {
        if (id > 1) {
            return (
                <TouchableOpacity onPress={() => {
                    if (id === 0) return
                    setTodoList(todoList.map((e) => {
                        return e.id === id ? { id: e.id, value: todoList[1].value, valueDescription: todoList[1].valueDescription } : e.id === (1) ? { id: e.id, value: todoList[id].value, valueDescription: todoList[id].valueDescription } : { id: e.id, value: e.value, valueDescription: e.valueDescription }
                    }))
                }}>
                    <Text style={styles.upDown}><Ionicons name="chevron-up-outline" size={30} /></Text>
                </TouchableOpacity>
            )
        }
        return (
            <TouchableOpacity onPress={() => {
                if (id === 0) return
                setTodoList(todoList.map((e) => {
                    return e.id === id ? { id: e.id, value: todoList[id - 1].value, valueDescription: todoList[id - 1].valueDescription } : e.id === (id - 1) ? { id: e.id, value: todoList[id].value, valueDescription: todoList[id].valueDescription } : { id: e.id, value: e.value, valueDescription: e.valueDescription }
                }))
            }}>
                <Text style={styles.upDown}><Ionicons name="chevron-up-outline" size={30} /></Text>
            </TouchableOpacity>
        )
    }

    if (showDelete === false) return null



    if (id > 1) {
        return (
            <View style={styles.topNav}>
                <View style={{}}>
                    <DeleteButton id={id} />
                </View>
                <View>
                    <UpArrow id={id} />
                </View>
            </View>
        )
    }

    return (
        <View style={styles.sideNav}>
            <View style={{ flex: 1 }}>
                <DeleteButton id={id} />
            </View>
            {todoList.length !== 1 &&
                <View style={styles.navigation}>
                    <UpArrow id={id} />
                    <DownArrow id={id} />
                </View>}
        </View>
    )
}

const styles = StyleSheet.create({
    topNav: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center'
    },
    navigation: {
        flex: 2,
    },
    minus: {
        textShadowColor: Colors.greenF,
        textShadowOffset: { width: 0, height: 0 },
        textShadowRadius: 8,
        fontFamily: 'open-sans-bold',
    },
    upDown: {
        textShadowColor: Colors.greenF,
        textShadowOffset: { width: 0, height: 0 },
        textShadowRadius: 8,
        fontFamily: 'open-sans-bold',
    }

})

export default Overhaul
