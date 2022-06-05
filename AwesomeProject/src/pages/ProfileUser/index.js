import { StyleSheet, Text, View, Button, Alert, TouchableOpacity} from 'react-native'
import React from 'react'
import { IconForward,
            IconBackLeft,
            UserProfile,
            IconRegistration,
            IconCardWallet,
            IconDeleteTicket,
            IconHomeChecked,
            } from '../../assets'

const ProfileUser = () => {
  return (
    
    <View style={styles.container}>



    <View style={styles.matahari}/>

      <View style={styles.header}>
          <TouchableOpacity>
            <IconBackLeft/>
            </TouchableOpacity>
      </View>

      <View style={styles.content1}>
          
            <UserProfile/>

            <View style={styles.txt1}>
            <Text style={{fontWeight: 'bold', fontSize: 15}}>Erick Chang</Text>
            <Text style={{fontSize: 12}}>+62-813-4369-3646</Text>
            </View>

            <View style={styles.IconRegistration}> 
            <TouchableOpacity>
            <IconRegistration/> 
            </TouchableOpacity>
            </View>
      </View>

      <View style={styles.content2}>
            <TouchableOpacity>
            <View style={styles.menu}>            
                <IconHomeChecked/>
                <Text style={styles.txt2}>Booked</Text>
                <IconForward  style={styles.forward}/>
            </View>
            </TouchableOpacity>
     </View>

     <View style={styles.content3}>
            <TouchableOpacity>
            <View style={styles.menu}>            
                <IconCardWallet/>
                <Text style={styles.txt3}>payment</Text>
                <IconForward  style={styles.forward2}/>
            </View>
            </TouchableOpacity>
     </View>

     <View style={styles.content3}>
            <TouchableOpacity>
            <View style={styles.menu}>            
                <IconDeleteTicket/>
                <Text style={styles.txt4}>Cancelled</Text>
                <IconForward  style={styles.forward3}/>
            </View>
            </TouchableOpacity>
     </View>

    <View style={styles.footer}>

    <Button
        title="Logout"
        color='#FFC700'
        onPress={() => Alert.alert('Thankyou for comming')}
      />

    </View>

   

    </View>

  )
}

export default ProfileUser

const styles = StyleSheet.create({

    container:{
          
    },


    header:{
        marginTop:34,
        marginLeft:32
    },

    content1:{
        marginTop: 90,
        marginHorizontal: 57,
        flexDirection: 'row',  
    },

    content2:{
        marginTop : 73,
        marginHorizontal: 96,
        
    },

    content3:{
        marginTop : 13,
        marginHorizontal: 103,
        
    },

    menu:{
        flexDirection: 'row'
    },

    forward:{
        width: 20,
        height: 20,
        marginLeft: 42,
        marginTop: 11
    },

    forward2:{
        width: 20,
        height: 20,
        marginLeft: 34,
        marginTop: 19
    },

    forward3:{
        width: 20,
        height: 20,
        marginLeft: 27,
        marginTop: 10
    },

    txt1:{
        flexDirection: 'column',
        marginLeft: 22,
        marginTop: 12,
        fontFamily: 'Poppins-Bold'
      
    },

    txt2:{

        marginLeft: 15,
        fontWeight: 'bold',
        fontSize: 11,
        marginTop: 11

    },

    txt3:{

        marginLeft: 19,
        fontWeight: 'bold',
        fontSize: 11,
        marginTop: 19

    },

    txt4:{

        marginLeft: 10,
        fontWeight: 'bold',
        fontSize: 11,
        marginTop: 10

    },

    IconRegistration:{
        marginLeft: 23,
        marginTop: 23
    },

    matahari:{
        width: 136,
        height: 122,
        backgroundColor: '#FFC700',
        position: 'absolute',
        borderBottomRightRadius: 300
    },

    footer:{
        marginHorizontal: 65,
        marginTop: 72,
        width: 261,
        height: 49,
        borderRadius: 8,
       
    },


})