import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SearchHome } from '../../assets'

const SearchHomePenyewa = () => {
  return (
    <View>
    <View style={styles.container}>
        <SearchHome/>
        <Text style={styles.txt}>Aermadidi</Text>
    </View>

    </View>
  )
}

export default SearchHomePenyewa

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', 
        alignItems: 'center', 
        paddingLeft: 15, 
        width: 300, 
        height: 44, 
        backgroundColor: '#D9D9D9', 
        borderRadius: 8, 
        marginLeft: 30, 
        marginTop: 32
    },
    txt: {
        fontFamily: 'Poppins-Regular', 
        fontSize: 17, 
        marginLeft: 10, 
        marginTop: 5
    }
})