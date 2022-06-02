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
  HomeOwner,
  Footer,
} from './src';

const App = () => {
  return (
    <View>
      <SelectUser />
      {/* <BorderSelectUser /> */}
      {/* <ViewDetails /> */}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
