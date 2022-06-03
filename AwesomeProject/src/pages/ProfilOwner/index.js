import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { IconBackLeft, IconRegistration, UserProfilOwner } from '../../assets'
import { BorderSelectUser, ButtonOwner, Gap } from '../../components'

const ProfilOwner = () => {
  return (
    <View>
      <View style={styles.sun}>
          <Gap height={36} />
          <IconBackLeft/>
      </View>
      <View style={styles.viewProfilOwner}>
          <Gap height={24} />
          <UserProfilOwner/>
          <View style={styles.viewNoOwner}>
            <Text style={styles.ownerName}>Erick Chang</Text>
            <Text style={styles.ownerNumber}>+62-813-4369-3646</Text>
          </View>
          <View style={styles.viewIconRegistration}><IconRegistration/>
          </View>
      </View>
      <View style={styles.buttonWrapper}>

        <ButtonOwner />

      </View>
          
          
    </View>
  )
}

export default ProfilOwner

const styles = StyleSheet.create({
    sun: {
        width: 136,
        height: 122,
        backgroundColor: '#FFC700',
        borderBottomRightRadius: 300,
        paddingLeft: 16,
    },
    viewProfilOwner: {
        marginLeft: 32,
        flexDirection: 'row'
    },
    viewNoOwner: {
        marginLeft: 22,
        justifyContent: 'center',
       
        
        
    },
    viewIconRegistration: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
        marginRight: 50,
        marginLeft: 64,
        

   
    },
    buttonWrapper: {
        marginLeft: 54,
        marginTop: 187,
    },
    ownerNumber: {
        fontFamily : 'Poppins-Light',
        fontSize: 12
        
    },
   ownerName: {
       fontFamily: 'Poppins-Bold',
       color: '#000000',
       fontSize: 15
      
   }
})