import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {HomeNav, UserNav} from '../../assets';
import Gap from '../Gap';

const Footer = () => {
  return (
    <View style={styles.container}>
      <Gap width={100} />
      <TouchableOpacity activeOpacity={0.7}>
        <HomeNav />
      </TouchableOpacity>
      <Gap width={80} />
      <TouchableOpacity activeOpacity={0.7}>
        <UserNav />
      </TouchableOpacity>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  container: {
    height: 57,
    backgroundColor: '#E5E5E5',
    flexDirection: 'row',
    alignItems: 'center',
    top: 42,
  },
});
