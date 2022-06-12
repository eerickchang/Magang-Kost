import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import ButtonEditDelete from '../ButtonEditDelete';

const ListKost = ({onPress, image, kostName, location, wifi='Free Wifi', price}) => {
  return (
    <>
      <View style={styles.viewListKost}>
        <Image source={{uri: `${image}`}} style={styles.image} />
        <View style={styles.viewTitle}>
          <Text style={styles.txtTitle}>{kostName}</Text>
          <Text style={styles.txtLocation}>{location}</Text>
          <Text style={styles.txtWifi}>{wifi}</Text>
          <View style={styles.viewTxtPrice}>
            <Text style={styles.txtPrice}>{price}</Text>
          </View>
          <View style={styles.viewButton}>
            <TouchableOpacity onPress={onPress}>
              <ButtonEditDelete btnName={'Edit'} color={'white'} />
            </TouchableOpacity>
            <View style={styles.button}>
              <ButtonEditDelete btnName={'Delete'} color={'red'} />
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export default ListKost;

const styles = StyleSheet.create({
  viewListKost: {
    backgroundColor: '#FFC700',
    width: 294,
    height: 140,
    borderRadius: 10,
    flexDirection: 'row',
    marginBottom: 22,
    // flex: 1
  },
  image: {
    width: 150,
    height: 140,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  viewTitle: {
    marginTop: 10,
    marginLeft: 12,
    flex: 1,
  },
  txtTitle: {
    color: 'black',
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
    marginBottom: -4,
  },
  txtLocation: {
    fontFamily: 'Poppins-Regular',
    color: 'black',
    fontSize: 10,
  },
  txtWifi: {
    fontFamily: 'Poppins-Regular',
    color: 'white',
    fontSize: 9,
  },
  viewTxtPrice: {
    alignItems: 'flex-end',
    marginTop: 14,
  },
  txtPrice: {
    marginRight: 14,
    color: 'black',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 11,
  },
  viewButton: {
    flexDirection: 'row',
    marginTop: 4,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    marginRight: 14,
  },
  button: {
    marginLeft: 8,
  },
});
