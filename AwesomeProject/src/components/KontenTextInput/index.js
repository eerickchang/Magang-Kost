import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Location} from '../../assets';
import TextInput from '../TextInput';
import {Pencil} from '../../assets';
import { TextInputEditKost } from '../..';

const KontenTextInput = ({Title, SubTitle, Width, height=49}) => {
  return (
    <View>
      <View style={styles.Icon}>
        <Location />
        <Text style={styles.Address}>{Title}</Text>
      </View>
      <View style={styles.SubIcon}>
      <TextInputEditKost
      SubTitle={SubTitle}
      Width = {Width}
      />
      </View>
    </View>
  );
};

export default KontenTextInput;

const styles = StyleSheet.create({
  Icon: {
    flexDirection: 'row',
  },
  Address:{
marginLeft: 10,
fontWeight:'bold',
color: 'black',
  },
  SubIcon:{
flexDirection: 'row',
marginTop: 6,
  },
});
