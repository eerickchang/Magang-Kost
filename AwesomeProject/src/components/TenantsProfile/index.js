import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {LocationBlank, Tenants1} from '../../assets';
import Gap from '../Gap';

const TenantsProfile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.photoName}>
        <Tenants1 />
        <Gap width={12} />
        <View style={styles.namePhone}>
          <Gap height={2} />
          <Text style={styles.txtName}>Andre Waani</Text>
          <View style={styles.phonePrice}>
            <Text style={styles.txtPhone}>+62-813-4369-3646</Text>
            <Gap width={48} />
            <Text style={styles.txtPrice}>$42/Mo</Text>
          </View>
        </View>
      </View>
      <Gap height={8} />
      <View style={styles.description}>
        <LocationBlank />
        <Gap width={5} />
        <Text style={styles.txtDesc}>Bitung</Text>
      </View>
    </View>
  );
};

export default TenantsProfile;

const styles = StyleSheet.create({
  container: {},
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
  },
  phonePrice: {
    flexDirection: 'row',
  },
  txtPrice: {
    color: '#DCAC00',
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
  },
  description: {
    flexDirection: 'row',
  },
  txtDesc: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    color: '#030303',
  },
});
