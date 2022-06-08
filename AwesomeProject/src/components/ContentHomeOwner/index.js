import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const ContentHomeOwner = ({backgroundColor, buton, title, subTitle, onPress}) => {
  return (
    <View>
      <View style={styles.kotak1(backgroundColor)}>
        <Text style={styles.TitleKotak1}>{title}</Text>
        <Text style={styles.isiKotak1}>{subTitle}</Text>
        <View style={styles.btnadd1}></View>
        <TouchableOpacity style={styles.container} onPress={onPress}>
          <Text style={styles.txt}>{buton}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ContentHomeOwner;

const styles = StyleSheet.create({
  kotak1: backgroundColor => ({
    backgroundColor: backgroundColor,
    padding: 20,
    elevation: 4,
    width: 293,
    height: 128,
    borderRadius: 8,
    marginLeft: 33,
  }),

  TitleKotak1: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000',
  },
  isiKotak1: {
    color: 'black',
    fontSize: 14,
  },
  btnadd1: {
    marginLeft: 193,
  },
  container: {
    height: 28,
    width: 65,
    backgroundColor: '#000',
    borderColor: '#fff',
    borderRadius: 20,
    marginLeft: 190,
  },
  txt: {
    marginTop: 4,
    marginLeft: 18,
    color: '#fff',
  },
});
