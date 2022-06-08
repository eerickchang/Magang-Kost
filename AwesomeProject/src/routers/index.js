import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  SelectUser,
  LoginOwner,
  SplashScreen,
  LoginUser,
  SignUpOwner,
  HomeOwner,
  HomePenyewa,
  SignUp,
  LanjutanViewPenyewa,
  AddOwner,
  ViewPenyewa,
  LanjutanEditKost,
  ViewBookedOwner,
  ViewDetails,
  ProfilOwner,
  EditKost,
} from '../pages';

const Stack = createNativeStackNavigator();

const Routers = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProfilOwner"
        component={ProfilOwner}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="HomePenyewa"
        component={HomePenyewa}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ViewBookedOwner"
        component={ViewBookedOwner}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="LanjutanViewPenyewa"
        component={LanjutanViewPenyewa}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SelectUser"
        component={SelectUser}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="LoginUser"
        component={LoginUser}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="LoginOwner"
        component={LoginOwner}
        options={{headerShown: false}}
      />
    
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUpOwner"
        component={SignUpOwner}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name="AddOwner"
        component={AddOwner}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name="ViewBookedOwner"
        component={ViewBookedOwner}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ViewPenyewa"
        component={ViewPenyewa}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="LanjutanEditKost"
        component={LanjutanEditKost}
        options={{headerShown: false}}
        />
      <Stack.Screen
        name="HomeOwner"
        component={HomeOwner}
        options={{headerShown: false}}/>
        <Stack.Screen
        name="ViewDetails"
        component={ViewDetails}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="EditKost"
        component={EditKost}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Routers;
