import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { BtnAddView } from '../../components';
import { User } from '../../assets';

const Owner = () => {
  return (
    <View style={styles.container}>
      <User/>
      <Text style={styles.greeting}>Hi George,</Text>
      <Text style={styles.greeting2}>Welcome Back!</Text>
      <View style={styles.kotak1}>
        <Text style={styles.TitleKotak1}>Add Kost</Text>
        <Text style={styles.isiKotak1}>Already have 2 kost</Text>
        <View style={styles.btnadd1}>
        <BtnAddView/>
        </View>
      </View>
    </View>
  );
};

export default Owner;

const styles = StyleSheet.create({
  greeting: {
    marginTop: 41,
    marginLeft: 33,
    fontSize: 13,
    color: 'black',
  },
  greeting2: {
    marginTop: 2,
    marginLeft: 33,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  kotak1: {
    backgroundColor: '#FFC700',
    padding: 20,
    elevation: 4,
    width: 293,
    height: 128,
    borderRadius: 8,
    marginLeft: 33,
  },
  TitleKotak1: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000',
  },
  isiKotak1: {
    color: 'black',
    fontSize: 14,
  },
  btnadd1: {
    marginLeft: 193,
  }
});
