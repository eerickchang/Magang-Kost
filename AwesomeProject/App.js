import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {
  SelectUser,
  SignIn,
  SplashScreen,
  SignUp,
  ViewDetails,
  TextInput,
  Label,
  Button,
} from './src';
import Gap from './src/components/Gap';

const App = () => {
  return (
    <View>
      <Button title="Poco" />
      <Gap height={15} />
      <Button backgroundColor={'red'} />
      <Gap height={15} />
      <Button backgroundColor={'green'} />
      <Gap height={15} />
      <Button backgroundColor={'blue'} />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
