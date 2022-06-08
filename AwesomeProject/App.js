import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AddOwner} from './src';
import Routers from './src/routers';
import {LoginOwner} from './src';
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
    // <LoginOwner />
    // <SelectUser />

    <NavigationContainer>
      {/* Rest of your app code */}
      <Routers />
    </NavigationContainer>
    // // <HomePenyewa />
  );
};

export default App;
