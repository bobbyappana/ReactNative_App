import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const Header = () => {
  return (
      <View style={styles.header}>
      <Text style={styles.title}>Header</Text>
      </View>
  )
}

export default Header

const styles = StyleSheet.create({
    header:{
        paddingTop:40,
        height:80,
        backgroundColor:'green',
    },
    title:{
      flex:1,
      color:'black',
      textAlign:'center',
      fontSize: 20,
      fontWeight: 'bold'
    }
})