import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AddOwner} from '..';
import ViewPenyewa from '../ViewPenyewa';

const Stack = createNativeStackNavigator();

const Routers = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AddOwner"
        component={AddOwner}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ViewPenyewa"
        component={ViewPenyewa}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Routers;
