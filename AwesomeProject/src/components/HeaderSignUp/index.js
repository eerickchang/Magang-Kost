import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Logo } from '../../assets/Icons'

const HeaderSignUp = () => {
  return (
    <View style={styles.container}>
    <Logo />
      <Text style={styles.txt }>Registration</Text>

    </View>
  )
}

export default HeaderSignUp

const styles = StyleSheet.create({
    txt:{
    fontWeight: 'bold',
    fontSize: 22,
    color: 'black',
    
   
    },
    container:{
      marginTop: 52,
    justifyContent: 'center',
    alignItems: 'center',
      marginBottom: 43,
    }
})