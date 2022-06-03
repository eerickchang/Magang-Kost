import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { HeaderOwner, ContentViewBookedOwner, Gap } from '../../components'
import { Homestay1, Homestay2, Homestay3 } from '../../assets'

const ViewBookedOwner = () => {
  return (
    <View>
      <HeaderOwner/>
      <View style={styles.containerWait}>
        <Text style={styles.txtWait}>
            Waiting for approval
        </Text>
        <View style={styles.contBooked}>
            <View style={styles.elips}>
                <Text style={styles.txtAngka}>2</Text>
            </View>
            <Text style={styles.txtBooked}>
                Booked Apply
            </Text>
        </View>
      </View>
      <View style={styles.contMark}>
          <Text style={styles.txtHome}>Homestay</Text>
          <View style={styles.mark} />
      </View>
      <Gap height={31}/>
      <ContentViewBookedOwner title={'RaTzyy'} gambar={<Homestay1/>} user={'John Doe'} phone={'+62-8565-7886-789'} harga={'$42/Month'} colorMark={'#00FFB2'}/>
      <ContentViewBookedOwner title={'Princeton'} gambar={<Homestay2/>} user={'Doe John'} phone={'+62-8562-4563-789'} harga={'$32/Month'} colorMark={'#FBDC3D'}/>
      <ContentViewBookedOwner title={'Tantaton'} gambar={<Homestay3/>} user={'D John'} phone={'+62-8565-7777-789'} harga={'$92/Month'} colorMark={'#8FFF00'}/>
    </View>
  )
}

export default ViewBookedOwner

const styles = StyleSheet.create({
    containerWait: {
        position: 'absolute',
        height: 86,
        width: 360,
        // backgroundColor: 'yellow',
        marginTop: 82,
        flexDirection: 'row',

    },
    contMark: {
        marginTop: 49, 
        height: 40, 
        justifyContent: 'center'
    },
    txtHome: {
        fontFamily: 'Poppins-SemiBold', 
        marginLeft: 18, 
        color: 'black'
    },
    mark: {
        height: 3, 
        width: 72, 
        backgroundColor: '#FFC700', 
        borderTopLeftRadius: 5, 
        borderTopRightRadius: 5, 
        marginLeft: 22
    },
    txtWait: {
        width: 127, 
        fontFamily: 'Poppins-Bold', 
        color: 'black', 
        fontSize: 20, 
        marginLeft: 29, 
        marginTop: 3
    },
    contBooked: {
        width: 96,
        height: 19,
        backgroundColor: '#F3F3F3',
        marginLeft: 45,
        marginTop: 6,
        borderRadius: 10,
        flexDirection: 'row',
    },
    elips: {
        height:12, 
        width: 12, 
        borderRadius: 6, 
        backgroundColor: 'white', 
        alignItems: 'center', 
        marginLeft: 5, 
        marginTop: 3
    },
    txtAngka: {
        fontFamily: 'Poppins-Bold', 
        fontSize: 10, 
        top: -1.5, 
        color: 'black'
    },
    txtBooked: {
        fontFamily: 'Poppins-Bold', 
        fontSize: 10, 
        color: 'black', 
        left: 2.15, 
        top: 1.75
    }
})