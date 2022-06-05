import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SelectPenyewa} from '../../assets';
import Gap from '../Gap';

const BorderSelectUser = ({title, icons, backgroundColor = '#FFC700'}) => {
  return (
    <View style={styles.container(backgroundColor)}>
      <Gap height={36} />
      <View style={styles.contentWrapper}>
        <Gap width={41} />
        {icons}
        <Gap width={46} />
        <Text style={styles.txt}>{title}</Text>
      </View>
    </View>
  );
};

export default BorderSelectUser;

const styles = StyleSheet.create({
  container: backgroundColor => ({
    width: 261,
    height: 131,
    backgroundColor: backgroundColor,
    borderRadius: 10,
  }),
  txt: {
    color: '#000',
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    marginTop: 18,
  },
  contentWrapper: {
    flexDirection: 'row',
  },
});
