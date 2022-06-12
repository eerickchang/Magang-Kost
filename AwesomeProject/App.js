import * as React from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Routers from './src/routers';
import {
  EditKost,
  LanjutanViewPenyewa,
  ListKost,
  PopularKost,
  TenantsProfile,
} from './src';
import ReferensiAPI from './src/pages/ReferensiAPI';

const App = () => {
  return (
    // <NavigationContainer>
    //   {/* Rest of your app code */}
    //   <Routers />
    // </NavigationContainer>
    <>
      <EditKost />
    </>
  );
};

export default App;
