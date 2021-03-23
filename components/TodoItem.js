import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

const TodoItem = (props) => {
    //add on press to bring up edit modal and button for delete
    return (
        <div>
            <TouchableOpacity activeOpacity={0.8}> 
                <View style={styles.listItem}>
                    <Text>
                        {props.title}
                    </Text>
                </View>
            </TouchableOpacity>
        </div>
    )
}

const styles = StyleSheet.create({
    listItem: {
        
    }
})

export default TodoItem
