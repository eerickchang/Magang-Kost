import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ContentImageKost = ({image}) => {
  return (
    <View>
      {image}
      <View style={styles.contImage}>
        <Text style={styles.txtTitle}>Kost Princeton</Text>
        <Text style={styles.txtDetails}>Details</Text>
      </View>
    </View>
  );
};

export default ContentImageKost;

const styles = StyleSheet.create({
  contImage: {
    width: 86.44,
    height: 32.73,
    backgroundColor: 'black',
    opacity: 0.7,
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
    position: 'absolute',
    marginTop: 87.27,
  },
  txtTitle: {
    color: 'white',
    fontFamily: 'Poppins-Regular',
    fontSize: 10,
    marginTop: 3,
    marginLeft: 6,
  },
  txtDetails: {
    color: '#EBFF09',
    fontFamily: 'Poppins-Regular',
    fontSize: 7,
    marginLeft: 28,
  },
});
