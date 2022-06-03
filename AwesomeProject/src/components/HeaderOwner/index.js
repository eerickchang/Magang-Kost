import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IconBackLeft, MatahariKuning, User, Gap} from '../../../src';

const index = () => {
  return (
    <View>
      <MatahariKuning />
      <View
        style={{
          position: 'absolute',
          marginTop: 33,
          marginLeft: 26,
          flexDirection: 'row',
        }}>
        <IconBackLeft />
        <Gap width={238} />
        <User />
      </View>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
