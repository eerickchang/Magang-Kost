import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SelectUser, LoginOwner, SplashScreen, LoginUser} from '../pages';

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
        name="SelectUser"
        component={SelectUser}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="LoginUser"
        component={LoginUser}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Routers;
