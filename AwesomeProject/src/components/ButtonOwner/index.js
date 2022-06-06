import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ButtonOwner = () => {
  return (
    <View style={styles.container} >
      <Text style={styles.txt}>Logout</Text>
    </View>
  )
}

export default ButtonOwner

const styles = StyleSheet.create({
    container: {
        width: 261,
        height: 49,
        backgroundColor: '#FFC700',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'
        
    },
    txt: {
        color: '#000000',
        fontSize: 18,
        fontFamily: 'Poppins-Bold',       
  }  
})