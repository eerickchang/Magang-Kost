import {StyleSheet, View} from 'react-native';
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
  SignUpOwner,
  AddOwner,
  BorderSelectUser,
  HomeOwner,
  ContentHomeOwner,
  User,
  Footer,
  LanjutanViewPenyewa,
  TenantsProfile,
  HeaderOwner,
  ProfileUser,
  ViewBookedOwner,
  ContentViewPenyewa,
  LoginOwner,
  HomePenyewa,
  Home,
} from './src';
import ViewPenyewa from './src/pages/ViewPenyewa';

const App = () => {
  return (
    <View>
      {/* <LoginOwner /> */}
      {/* <SplashScreen /> */}

      {/* <TenantsProfile /> */}
      <ViewBookedOwner />
      {/* <HomePenyewa /> */}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
