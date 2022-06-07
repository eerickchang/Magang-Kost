import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Routers from './src/routers';
import {SelectUser} from './src';
import {LoginOwner} from './src';

const App = () => {
  return (
    // <LoginOwner />
    // <SelectUser />

    <NavigationContainer>
      <Routers />
    </NavigationContainer>
  );
};

export default App;
