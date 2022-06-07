import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Pencil} from '../../assets';
import Gap from '../Gap';

const TextInputEditKost = ({SubTitle, Width}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>{SubTitle}</Text>
      <Gap width={Width}/>
      <Pencil style={styles.Pensil} />
    </View>
  );
};

export default TextInputEditKost;

const styles = StyleSheet.create({
  container: {
    height: 49,
    width: 286,
    backgroundColor: '#ffffff',
    borderColor: '#000000',
    borderRadius: 8,
    flexDirection: 'row',
  },
  Pensil: {
    marginTop: 8,
    marginLeft: 55,
  },
  txt: {
    marginTop: 13,
    marginLeft: 17,
  },
});
