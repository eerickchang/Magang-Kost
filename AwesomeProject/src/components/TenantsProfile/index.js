import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useState} from 'react';
import {
  Elipse,
  Job,
  LocationBlank,
  Tenants1,
  Tenants2,
  Tenants3,
  Tenants4,
  Tenants5,
} from '../../assets';
import Gap from '../Gap';

const TenantsProfile = ({
  name,
  price = '$42',
  location = 'Bitung',
  job = 'UI Designer',
  image,
  day = '4d',
  phoneNumber,
}) => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.photoName}>
          <Image
            style={{height: 50, width: 50, borderRadius: 8}}
            source={{uri: `${image}`}}
          />
          <Gap width={12} />
          <View style={styles.namePhone}>
            <Gap height={2} />
            <Text style={styles.txtName}>{name}</Text>
            <Text style={styles.txtPhone}>{phoneNumber}</Text>
            <Gap width={32} />
            <Text style={styles.txtPrice}>{price}</Text>
          </View>
        </View>
        <Gap height={5} />
        <View style={styles.description}>
          <LocationBlank />
          <Text style={styles.txtLocation}>{location}</Text>
          <Gap width={70} />
          <Job />
          <Text style={styles.txtDesc}>{job}</Text>
          <Gap width={64} />
          <Elipse style={styles.elipseStyle} />
          <Gap width={101} />
          <Text style={styles.txtDay}>{day}</Text>
        </View>
      </View>
    </>
  );
};

export default TenantsProfile;

const styles = StyleSheet.create({
  container: {
    height: 80,
    marginBottom: 28,
  },
  photoName: {
    flexDirection: 'row',
  },
  txtName: {
    color: '#030303',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
  },
  txtPhone: {
    color: '#030303',
    fontFamily: 'Poppins-Light',
    fontSize: 11,
    width: 120,
  },
  txtPrice: {
    color: '#DCAC00',
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    width: 71,
    textAlign: 'right',
    position: 'absolute',
    marginTop: 22,
    marginLeft: 143,
  },
  description: {
    flexDirection: 'row',
    // backgroundColor: 'yellow',
    width: 285,
    height: 40,
    paddingTop: 3,
  },
  txtDesc: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    color: '#030303',
    width: 112,
    position: 'absolute',
    marginLeft: 103,
  },
  txtLocation: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    color: '#030303',
    width: 43,
    position: 'absolute',
    marginLeft: 19,
  },
  elipseStyle: {
    position: 'absolute',
    marginLeft: 248,
    marginTop: 8,
  },
  txtDay: {
    color: '#030303',
    fontSize: 10,
    fontFamily: 'Poppins-Regular',
  },
});
