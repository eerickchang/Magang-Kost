import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routers from './src/pages/routers';

const App = () => {
  return (
    <NavigationContainer>
      {/* Rest of your app code */}
      <Routers />
    </NavigationContainer>
  );
};

export default App;