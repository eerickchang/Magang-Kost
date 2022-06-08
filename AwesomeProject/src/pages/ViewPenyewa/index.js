import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  ContentViewPenyewa,
  Gap,
  HeaderAddOwner,
  HeaderOwner,
  Footer,
} from '../../components';

const ViewPenyewa = ({navigation}) => {
  return (
    <View>
      {/* Header */}
      <HeaderOwner onPress={() => navigation.navigate('HomeOwner')} />
      {/* Title */}
      <View style={styles.label}>
        <Text style={styles.txtLabel}>Tenant at</Text>
        <Text style={styles.txtLabel}>Boarding House</Text>
      </View>

      <Gap height={17} />
      {/* Content */}
      <ContentViewPenyewa
        onPress={() => navigation.navigate('LanjutanViewPenyewa')}
      />

      {/* Footer */}
      {/* <Footer /> */}
    </View>
  );
};

export default ViewPenyewa;

const styles = StyleSheet.create({
  label: {
    marginLeft: 27,
    position: 'absolute',
    marginTop: 79,
  },
  txtLabel: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#000000',
  },
});
