import React from 'react'
import { View, Text, Button, StyleSheet, TextInput } from "react-native";

const Home = ({ navigation  }) => {

    const navigateScreen = () => {
        navigation.navigate('About', {name:'hello world'})
        // or navigation.push('About')
    }

    return (
        <View>
            <Button title='Navigations' onPress={navigateScreen} />
        </View>
    )
}

export default Home