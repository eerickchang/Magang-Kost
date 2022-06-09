import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AddOwner, EditKost, HomePenyewa, ListKost} from './src';
import Routers from './src/routers';
import Edit from './src/pages/EditKost';
import SearchHomePenyewa from './src/components/SearchHomePenyewa';

const App = () => {
  return (
    <NavigationContainer>
      {/* Rest of your app code */}
      <Routers />
    </NavigationContainer>
    // <HomePenyewa />
  );
};

export default App;
