import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AddOwner} from './src';
import Routers from './src/routers';

const App = () => {
  return (
    <NavigationContainer>
      {/* Rest of your app code */}
      <Routers />
    </NavigationContainer>
  );
};

export default App;
