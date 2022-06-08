import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const ContentImageKost = ({image, kost, onPressViewDetails}) => {
  return (
    <TouchableOpacity onPress={onPressViewDetails} activeOpacity={0.8}>
      {image}
      <TouchableOpacity activeOpacity={0.8} style={styles.contImage}>
        <Text style={styles.txtTitle}>{kost}</Text>
        <Text style={styles.txtDetails}>Details</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default ContentImageKost;

const styles = StyleSheet.create({
  contImage: {
    width: 86.44,
    height: 32.73,
    backgroundColor: 'black',
    opacity: 0.75,
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
    position: 'absolute',
    marginTop: 87.27,
  },
  txtTitle: {
    color: 'white',
    fontFamily: 'Poppins-Regular',
    fontSize: 10,
    marginTop: 3,
    textAlign: 'center',
  },
  txtDetails: {
    color: '#EBFF09',
    fontFamily: 'Poppins-Regular',
    fontSize: 8,
    textAlign: 'center',
  },
});
