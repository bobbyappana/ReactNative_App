import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const TodoItem = ({ item, handler }) => {
    return (
        <TouchableOpacity onPress={() => handler(item.key)}>
            <Text style={styles.item}>{item.text}</Text>
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
        borderRadius: 10
    }
})