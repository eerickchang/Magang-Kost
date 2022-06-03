import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Homestay1, HumanHead } from '../../assets'
import Gap from '../Gap'

const ContentViewBookedOwner = ({title, user, phone, gambar, harga, colorMark}) => {
  return (
    <View style={styles.container}>
        {gambar}
        <Gap width={22}/>
        <View>
            <View style={styles.mark(colorMark)}/>
            <Text style={styles.title}>{title}</Text>
            <Gap height={8}/>
            <Text style={styles.subtitle}>Booked by {user}</Text>
            <Text style={styles.phone}>{phone}</Text>
            <Gap height={2.74}/>
            <View style={{flexDirection: 'row', height: 16.4}}>
                <HumanHead/>
                <Gap width={5.12}/>
                <Text style={styles.phone}>5 x 5</Text>
            </View>
            <Text style={{marginLeft: 118, color: 'black', fontFamily: 'Poppins-SemiBold', fontSize: 10}}>{harga}</Text>
        </View>

    </View>
  )
}

export default ContentViewBookedOwner

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: 323,
        height: 80,
        marginLeft: 15,
        marginBottom: 18,
    },
    title: {
        fontFamily: 'Poppins-Bold',
        fontSize: 13,
        color: 'black',
        height: 19,
        position: 'absolute'

    },
    subtitle: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 10,
        color: 'black',
        height: 14,
    },
    phone: {
        fontFamily: 'Poppins-Regular',
        fontSize: 10,
        color: 'black',
        height: 14
    }, 
    mark: (colorMark) => ({
        width: 56, 
        height: 10, 
        backgroundColor: colorMark, 
        left:-5, 
        top: 2,
    })
})