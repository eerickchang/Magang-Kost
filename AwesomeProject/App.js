import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Routers from './src/routers';
import {
  HeaderSignUp,
  HomePenyewa,
  SelectUser,
  SignUp,
  SignUpOwner,
  ViewBookedOwner,
} from './src';

const App = () => {
  return (
    <NavigationContainer>
      <Routers />
    </NavigationContainer>
    // <HomePenyewa />
  );
};

export default App;
