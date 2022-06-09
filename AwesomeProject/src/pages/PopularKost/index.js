import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { SearchKostPopular } from '../../components'
import ContenKostPopular from '../../components/ContentKostPopular'
import { MatahariKuning } from '../../assets'



const PopularKost = ({navigation}) => {
  return (
    <View style={styles.container}>

    <View styles={styles.header}>
    <SearchKostPopular/>
    </View>
    <Text style={{fontFamily:'Poppins-SemiBold', fontSize:16, marginLeft: 44, marginTop: 20, color:'#000000'}}>Popular Kost</Text>

    {/* content */}
    <ScrollView style={{height: 600}}>
    <ContenKostPopular 
    suggest={'ContentKostPopular'}
    onPressDetailPrinceton={() => navigation.navigate('ViewDetails')}/>

    {/* <ContenKostPopular 
    suggest={'ContentKostPopular'}
    onPressDetailPrinceton={() => navigation.navigate('ViewDetails')}/>

    <ContenKostPopular 
    suggest={'ContentKostPopular'}
    onPressDetailPrinceton={() => navigation.navigate('ViewDetails')}/>

    <ContenKostPopular 
    suggest={'ContentKostPopular'}
    onPressDetailPrinceton={() => navigation.navigate('ViewDetails')}/> */}
    </ScrollView>
    {/* end of content */}

    </View>
  )
}

export default PopularKost

const styles = StyleSheet.create({



});