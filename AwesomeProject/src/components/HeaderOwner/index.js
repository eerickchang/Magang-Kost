import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {IconBackLeft, MatahariKuning, User, Gap} from '../../../src';

const HeaderOwner = ({onPress}) => {
  return (
    <View>
      <MatahariKuning />
      <View style={styles.container}>
        <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
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
