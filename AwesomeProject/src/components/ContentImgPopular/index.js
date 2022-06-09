import {StyleSheet, Text, View, TouchableOpacity, Button} from 'react-native';
import React from 'react';
import { StarContent } from '../..';

const ContentImgPopular = ({image, kost, onPressDetailPrinceton}) => {
  return (
    <TouchableOpacity activeOpacity={0.8}>
    
      {image}
     
    <StarContent style={styles.StarContent}/>
    
        <TouchableOpacity activeOpacity={0.8} style={styles.contImage}>  
        <Text style={styles.txtTitle}>{kost}</Text>

        <TouchableOpacity
        activeOpacity={0.8}
        style={styles.btn}
        onPress={onPressDetailPrinceton}>
        <Text style={styles.txtBtn}>View</Text>
      </TouchableOpacity>
      </TouchableOpacity>

    </TouchableOpacity>

    
  );
};

export default ContentImgPopular;

const styles = StyleSheet.create({
  contImage: {
    width: 124,
    height: 69,
    backgroundColor: 'black',
    opacity: 0.75,
    position: 'absolute',
    marginTop: 87.27,

  },
  txtTitle: {
    color: 'white',
    fontFamily: 'Poppins-Regular',
    fontSize: 8,
    marginTop: 3,
    
    
  },
  txtBtn: {
    fontFamily: 'Poppins-Regular',
    fontSize: 8,
    height: 12,
    color: 'white',
    backgroundColor: '#FFC700',
    with: 77,
    height: 16,
    marginHorizontal: 22,
    borderRadius: 2,
    textAlign: 'center',
  },

  StarContent:{
      position: 'absolute',
      marginRight: 30
  }
});
