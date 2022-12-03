import React from 'react'
import { View, Text, Button, StyleSheet, TextInput } from "react-native";

const About = ({navigation}) => {

    const navigateScreen = () => {
        navigation.goBack()
        // or navigation.push('About')
    }
    return (
        <View>
            <Text>{navigation.getParam('name')}</Text>
            <Button title='Back' onPress={navigateScreen} />
        </View>
    )
}

export default About