import {StyleSheet, Text, View, TextInput as TextInputRN} from 'react-native';
import React from 'react';
import {SearchHome} from '../../assets';
import Gap from '../Gap';

const SearchHomePenyewa = () => {
  return (
    <View style={styles.search}>
      <SearchHome />
      <Gap width={5} />
      <TextInputRN
        placeholder="Aermadidi"
        style={{
          fontFamily: 'Poppins-Regular',
          width: 230,
          fontSize: 15,
        }}
      />
    </View>
  );
};

export default SearchHomePenyewa;

const styles = StyleSheet.create({
  search: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 15,
    width: 300,
    height: 44,
    backgroundColor: '#D9D9D9',
    borderRadius: 8,
    marginLeft: 30,
    marginTop: 22,
    marginBottom: 10,
  },
});
