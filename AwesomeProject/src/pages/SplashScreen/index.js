import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {LogoBesar} from '../../assets';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('SelectUser');
    }, 3000);
  });

  return (
    <View style={styles.container}>
      <View style={styles.content}></View>

      <LogoBesar />
      <Text style={styles.txt}>Ngosngosan</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    //   flex: 1,
    width: 360,
    height: 640,
    backgroundColor: '#FFC700',
    justifyContent: 'center',
    alignItems: 'center',
  },

  txt: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 20,
  },

  // content: {
  //   flex: 1,
  //   backgroundColor: '#FFC700',
  // },
});
