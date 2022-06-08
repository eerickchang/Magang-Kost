import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const ButtonEditDelete = ({color, btnName}) => {
  return (
    <>
      <View style={styles.viewButton}>
        <TouchableOpacity style={styles.buttonEdit}>
          <Text style={styles.txtButtonEdit(color)}>{btnName}</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

export default ButtonEditDelete

const styles = StyleSheet.create({
    buttonEdit: {
        width: 56,
        height: 16,
        borderRadius: 8,
        backgroundColor: '#000000',
        justifyContent: 'center',
        alignItems: 'center',
    },
    txtButtonEdit: color => ({
        color: color,
        fontSize: 8,
        fontFamily: 'Poppins-SemiBold'
    }),
})