import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {LogoKecil} from '../../assets/Icons';

const HeaderSignUp = () => {
  return (
    <View style={styles.container}>
      <LogoKecil />
      <Text style={styles.txt}>Registration</Text>
    </View>
  );
};

export default HeaderSignUp;

const styles = StyleSheet.create({
  txt: {
    fontWeight: 'bold',
    fontSize: 22,
    color: 'black',
  },
  container: {
    marginTop: 52,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 43,
  },
});
