import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
// import { MatahariKuning, IconBack } from '../../assets'
import {Popular1, Popular2} from '../../assets';
import Gap from '../Gap';
import { ContentImgPopular } from '../..';

const ContenKostPopular = ({
    suggest,
    onPressDetailPrinceton,
    onPressKostPopular,
    

}) => {
  return (
    <View style={styles.container}>
      <Gap height={6} />
      <View style={styles.content}>

        <View style={{flexDirection: 'row', backgroundColor: 'pink', width: 10}}>
            <ContentImgPopular
              image={<Popular2 />}
              kost={'Kost Princeton \nJl.Arnold Kanaan Aermadidi\nRp.2.000.000/Month'}
              onPress={onPressDetailPrinceton}
            />
            <Gap width={15} />
            <ContentImgPopular image={<Popular1 />} kost={'Kost Princeton \nJl.Arnold Kanaan Aermadidi\nRp.2.000.000/Month'} />
            

            
        </View>
      </View>
    </View>
  )
}

export default ContenKostPopular

const styles = StyleSheet.create({

  container: {
    width: 300,
    height: 179,
    marginLeft: 26,
    marginTop: 20,
  },
  content: {
    height: 120.5,
    marginLeft: 18,
    marginRight: 18,

  },
  txt: {
    fontFamily: 'Poppins-SemiBold',
    marginLeft: 22,
    marginTop: 5,
    color: '#997700',
    height: 19,
  },

  txtBtn: {
    fontFamily: 'Poppins-Regular',
    fontSize: 8,
    height: 12,
    color: 'black',
  },
    
 
})