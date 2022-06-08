import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AddOwner} from './src';
import Routers from './src/routers';
<<<<<<< HEAD
=======
import {LoginOwner} from './src';
import {
  HeaderSignUp,
  HomePenyewa,
  ProfilOwner,
  SelectUser,
  SignUp,
  SignUpOwner,
} from './src';
>>>>>>> fa858d73897ee402bd1c499ae9fa0d42dc9408a9

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
