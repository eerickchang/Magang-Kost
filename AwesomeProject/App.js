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
} from './src';
import ViewPenyewa from './src/pages/ViewPenyewa';


const App = () => {
  return (
    <View>
      {/* <SignUpOwner /> */}
      <LoginOwner />
      {/* <SplashScreen /> */}

      {/* <TenantsProfile /> */}
      {/* <ViewBookedOwner/> */}
      {/* <ProfilOwner /> */}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
