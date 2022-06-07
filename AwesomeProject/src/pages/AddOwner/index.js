import {StyleSheet, View, ScrollView} from 'react-native';
import React from 'react';
import {ContentAddOwner, HeaderAddOwner} from '../../components';

const AddOwner = ({navigation}) => {
  return (
    <View style={styles.container}>
      <HeaderAddOwner />
      {/* <HeaderOwner /> */}
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
