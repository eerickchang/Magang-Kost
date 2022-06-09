import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Routers from './src/routers';
import {
  HeaderSignUp,
  HomePenyewa,
  ProfilOwner,
  SelectUser,
  SignUp,
  SignUpOwner,
  ViewBookedOwner,
} from './src';

const App = () => {
  return (
    <NavigationContainer>
      <Routers/>
    </NavigationContainer>
  );
};

export default App;
