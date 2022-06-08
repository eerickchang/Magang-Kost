import {StyleSheet, View, ScrollView} from 'react-native';
import React from 'react';
import {ContentAddOwner, HeaderAddOwner, HeaderOwner} from '../../components';

const AddOwner = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* <HeaderAddOwner onPressBack={() => navigation.navigate('HomeOwner')} /> */}
      <HeaderOwner onPressBack={() => navigation.navigate('HomeOwner')} />
      <ContentAddOwner onPress={() => navigation.navigate('ViewPenyewa')} />
      {/* <FooterContoh /> */}
    </View>
  );
};

export default AddOwner;

const styles = StyleSheet.create({
  container: {
    height: 640,
    width: 360,
  },
});
