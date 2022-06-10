import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Routers from './src/routers';
import {View, Text} from 'react-native';
const App = () => {
  return (
    // <NavigationContainer>
    //   <Routers/>
    // </NavigationContainer>
    <View style={{paddingLeft: 40, paddingTop: 40, backgroundColor: 'pink', width: 100, flexDirection: 'row'}}>
      <View style={{backgroundColor: 'skyblue', flexDirection: 'row', width: 100, paddingRight: 70}}>
        <Text>Rolando</Text>
        <Text>Andre</Text>
        <Text style={{}}>Gerald</Text>
      </View>
    </View>
  );
};

export default App;
