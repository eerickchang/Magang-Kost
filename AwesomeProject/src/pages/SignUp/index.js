import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button, TextInput} from '../../components';

const SignUp = () => {
  return (
    <View style={styles.container}>
      <TextInput />
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
