import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const TextInput = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>{title}</Text>
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  container: {
    height: 49,
    width: 261,
    backgroundColor: '#ffffff',
    borderColor: '#000000',
    borderWidth: 1,
    borderRadius: 8,
  },
  txt: {
    marginTop: 13,
    marginLeft: 20,
  },
});
