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
  BorderSelectUser,
} from './src';
import Gap from './src/components/Gap';

const App = () => {
  return (
    <View>
      <SelectUser />
      {/* <BorderSelectUser /> */}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
