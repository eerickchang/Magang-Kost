import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {IconBackLeft, MatahariKuning, User, Gap} from '../../../src';

<<<<<<< HEAD
const HeaderOwner = ({onPressBack}) => {
=======
const HeaderOwner = ({onPress}) => {
>>>>>>> fa858d73897ee402bd1c499ae9fa0d42dc9408a9
  return (
    <View>
      <MatahariKuning />
      <View style={styles.container}>
<<<<<<< HEAD
        <TouchableOpacity activeOpacity={0.7} onPress={onPressBack}>
=======
        <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
>>>>>>> fa858d73897ee402bd1c499ae9fa0d42dc9408a9
          <IconBackLeft />
        </TouchableOpacity>
        <Gap width={238} />
        <TouchableOpacity activeOpacity={0.7}>
          <User />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HeaderOwner;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    marginTop: 33,
    marginLeft: 26,
    flexDirection: 'row',
  },
});
