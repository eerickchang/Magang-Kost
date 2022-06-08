import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Star } from '../../assets';

const StarContent = () => {
  return (
    <View style={styles.container}>
          <Star/>
          <Star/>
          <Star/>
          
    </View>
  )
}

export default StarContent

const styles = StyleSheet.create({

    container:{
        
        position: 'absolute',
        flexDirection: 'row',
        marginLeft: 70
    }

})