import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Routers from './src/routers';
<<<<<<< HEAD
import {SelectUser} from './src';
import {LoginOwner} from './src';
=======
import {
  HeaderSignUp,
  HomePenyewa,
  SelectUser,
  SignUp,
  SignUpOwner,
} from './src';
>>>>>>> refs/remotes/origin/Iterasi_1

const App = () => {
  return (
    // <LoginOwner />
    // <SelectUser />

    <NavigationContainer>
      <Routers />
    </NavigationContainer>
    // <HomePenyewa />
  );
};

export default App;
