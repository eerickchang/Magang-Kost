import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  SelectUser,
  LoginOwner,
  SplashScreen,
  LoginUser,
<<<<<<< HEAD
  SignUpOwner,
  HomeOwner,
=======
  HomeOwner,
  HomePenyewa,
  SignUp,
  SignUpOwner,
  LanjutanViewPenyewa,
  ViewBookedOwner,
  ViewDetails,
>>>>>>> refs/remotes/origin/Iterasi_1
} from '../pages';

const Stack = createNativeStackNavigator();

const Routers = () => {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      /> */}
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
<<<<<<< HEAD
=======
        name="HomeOwner"
        component={HomeOwner}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{headerShown: false}}
      />
      <Stack.Screen
>>>>>>> refs/remotes/origin/Iterasi_1
        name="SignUpOwner"
        component={SignUpOwner}
        options={{headerShown: false}}
      />
      <Stack.Screen
<<<<<<< HEAD
        name="HomeOwner"
        component={HomeOwner}
=======
        name="ViewDetails"
        component={ViewDetails}
>>>>>>> refs/remotes/origin/Iterasi_1
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Routers;
