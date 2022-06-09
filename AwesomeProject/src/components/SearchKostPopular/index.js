import {StyleSheet, Text, View, TextInput as TextInputRN, TouchableOpacity} from 'react-native';
import React from 'react';
import {SearchHome, MatahariKuning, IconBack} from '../../assets';
import Gap from '../Gap';

const SearchKostPopular = ({navigation}) => {
  return (
    <View style={styles.container}>
    
    <MatahariKuning style={styles.MatahariKuning}/>
    <TouchableOpacity>
    <IconBack style={styles.IconBack}/>
    </TouchableOpacity>

    <View style={styles.search}>
    <SearchHome />
    <Gap width={5}/>
    <TextInputRN
      placeholder="Search"
      style={{
        fontFamily: 'Poppins-Regular',
        width: 230,
        fontSize: 15,
      }}
    />
  </View>
  </View>
  )
}

export default SearchKostPopular

const styles = StyleSheet.create({

    MatahariKuning:{
        position: 'absolute'
    },

    IconBack:{
        position: 'absolute',
        marginTop : 35,
        marginLeft : 27,
    },

    search: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 15,
        width: 225,
        height: 44,
        backgroundColor: '#D9D9D9',
        borderRadius: 8,
        marginLeft: 85,
        marginTop: 32,
        marginBottom: 10,
      },

})