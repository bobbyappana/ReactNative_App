import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, FlatList, StyleSheet, Text, View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import AddTodo from './components/AddTodo';
import Header from './components/header';
import TodoItem from './components/TodoItem';
export default function App() {
  const [todo, setTodo] = useState([
    { text: 'ram', key: '1' },
    { text: 'hari', key: '2' },
    { text: 'kumar', key: '3' },
  ])

  const pressHandler = (key) => {
    setTodo((prevTodo) => {
      return prevTodo.filter((item) => item.key != key)
    })
  }

  const addTodo = (text) => {
    if (text.length > 3) {
      setTodo((prevTodo) => {
        return [...prevTodo, { text: text, key: Math.random().toString() }]
      })
    } else {
      Alert.alert('plese enter proper todo', [
        { text: 'Undestood', onPress: () => console.log("okay") }
      ])
    }
  }

  return (
    <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss() }}>
      <View style={{ backgroundColor: "#fff" }}>
        <Header />
        <View style={styles.content}>
          <AddTodo addTodo={addTodo} />
          <View style={styles.list}>
            <FlatList
              data={todo}
              renderItem={({ item }) => (
                <TodoItem item={item} handler={pressHandler} />
              )} />
          </View>
        </View>
        <StatusBar style="auto" />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 40
  },
  list: {
    marginTop: 20,
    color: 'black'
  }
});
