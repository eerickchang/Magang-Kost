import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const ButtonAddView = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.txt}>add</Text>
    </TouchableOpacity>
  );
};

export default ButtonAddView;

const styles = StyleSheet.create({
  container: {
    height: 28,
    width: 65,
    backgroundColor: '#000',
    borderColor: '#fff',
    borderRadius: 20,
  },
  txt: {
    marginTop: 4,
    marginLeft: 18,
    color: '#fff',
  },
});
