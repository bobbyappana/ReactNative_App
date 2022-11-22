import React, { useState } from "react";
import { View, Text, Button, StyleSheet, TextInput } from "react-native";

const AddTodo = ({ addTodo }) => {
    const [inputText, setInputText] = useState("")

    const OnChangeHandler = (val) => {
        setInputText(val)
    }
  
    return (
        <View>
            <TextInput style={styles.input}
                placeholder="Add todo.."
                onChangeText={OnChangeHandler} />
            <Button onPress={() => { addTodo(inputText)}} title="Add Todo"/>
        </View>
    )
}
export default AddTodo

const styles = StyleSheet.create({
    input: {
        paddingHorizontal: 10,
        marginBottom: 10,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#ddd",
    }
})