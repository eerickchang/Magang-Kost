import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ButtonLanjutanEditKost = () => {
  return (
    <View style={styles.container}>
      <Text style = {{color: 'white', fontWeight: 'bold', marginLeft:100, marginTop: 15,}}> Change </Text>
      
    </View>
  )
}

export default ButtonLanjutanEditKost

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        width: 261,
        height: 49, 
        
    },
      
})