import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, Gap } from '../../components'
import { LogoKecil } from '../../assets'



const Login = () => {
  return (
    <View 
    style={{ 
        justifyContent: 'center',
        alignItems: 'center',
         }}>
           
            <View style={{marginTop: 82 }}>
                <LogoKecil width={107} height={82}/>
            </View>
            

             <Text
                 style={styles.Ocop }>
                    Login
            </Text>
            <Gap  height={44}/>
            
            

           <Text 
             style={styles.poco}>
                  Hello Mr. Ryan 
            </Text>
            <Gap  height={23}/>

            <Text 
            style={styles.ryan}>
                Hello Ocop
            </Text>

            <View>
            <Gap height={25}/>
            </View>

            <View style={styles.oland}> 
            </View>
            <Gap height={90}/>

                    
                    <Text
                 style={styles.ratzy}>
                        Login
                 </Text>
             </View>
  )
}

export default Login

const styles = StyleSheet.create({
    Ocop: {
        fontWeight: 'bold', 
             fontSize: 24,
             color: '#000000',
    },
    poco: {
        borderWidth: 1,
              width: 261,
                height: 49,
                borderRadius: 10,
                 
                marginLeft: 49,
                 marginRight: 50,
    },
    ryan:{
        borderWidth: 1,
                 width: 261, 
                 height: 49,
                 borderRadius: 10,
                 marginRight: 50,
                 marginLeft: 49,
    },
    ratzy: {
        borderWidth: 1,
                width: 261,
                height: 49,
                borderRadius: 10,
                backgroundColor: '#FFC700',
    },
    oland: {
        borderWidth: 1,
         width: 14,
          height: 14,
          marginLeft: 51,
          marginRight: 295,
    },
    ando:{
        width: 134, 
        height: 16,
        marginLeft: 58,
        marginRight: 175,
    },
   

})