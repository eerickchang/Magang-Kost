import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IconBackLeft, MatahariKuning, User} from '../../assets';
import {Gap} from '../../components';

const LanjutanViewPenyewa = () => {
  return (
    <View style={styles.container}>
      <MatahariKuning />
      <View style={styles.headerProfile}>
        <Gap width={28} />
        <IconBackLeft />
        <Gap width={249} />
        <User />
      </View>
      <Text style={styles.txt}>6 Tenants Available</Text>
      <View style={styles.container2}></View>
    </View>
  );
};

export default LanjutanViewPenyewa;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  headerProfile: {
    position: 'absolute',
    flexDirection: 'row',
    marginTop: 41,
  },
  txt: {
    color: '#030303',
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
    position: 'absolute',
    marginTop: 123,
    marginLeft: 25,
  },
});
