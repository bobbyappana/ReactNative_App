import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
const TodoItem = ({ item, handler }) => {
    return (
        <TouchableOpacity onPress={() => handler(item.key)}>
            <Text style={styles.item}><MaterialIcons name="delete" />&nbsp;&nbsp;&nbsp;{item.text}</Text>
        </TouchableOpacity>
    )
}
export default TodoItem

const styles = StyleSheet.create({
    item: {
        padding: 16,
        margin: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: "dotted",
        borderRadius: 10,
        flexDirection: 'row'
    }
})