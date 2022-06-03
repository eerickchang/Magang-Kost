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
  ContentHomeOwner,
  User,
  Footer,
  LanjutanViewPenyewa,
  TenantsProfile,
  HeaderOwner,
} from './src';
import ViewBookedOwner from './src/pages/ViewBookedOwner';

const App = () => {
  return (
    <View>
      <HomeOwner />
      {/* <TenantsProfile /> */}
      <HeaderOwner/>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
