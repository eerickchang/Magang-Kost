import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ButtonOwner = ({backgroundColor,title,fontColor}) => {
  return (
    <View style={styles.container(backgroundColor)} >
      <Text style={styles.txt(fontColor)}>{title}</Text>
    </View>
  )
}

export default ButtonOwner

const styles = StyleSheet.create({
    container: (backgroundColor) => ({
        width: 261,
        height: 49,
        backgroundColor: backgroundColor,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'
        
    }),
    txt:(fontColor) => ({
        color:fontColor,
        fontFamily: 'Poppins-Bold',       
  })  
})