import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Routers from './src/routers';
import {LoginOwner} from './src';
import {
  HeaderSignUp,
  HomePenyewa,
  ProfilOwner,
  SelectUser,
  SignUp,
  SignUpOwner,
} from './src';

const App = () => {
  return (
    // <LoginOwner />
    // <SelectUser />

    <NavigationContainer>
      <Routers />
    </NavigationContainer>
    // // <HomePenyewa />
   
  );
};

export default App;
