import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  ContentViewPenyewa,
  Footer,
  Gap,
  HeaderAddOwner,
  HeaderOwner,
} from '../../components';

const ViewPenyewa = () => {
  return (
    <View>
      {/* Header */}
      <HeaderOwner />
      {/* Title */}
      <View style={styles.label}>
        <Text style={styles.txtLabel}>Tenant at</Text>
        <Text style={styles.txtLabel}>Boarding House</Text>
      </View>

      <Gap height={17} />

      {/* Content */}
      <ContentViewPenyewa />

      <Gap height={35} />
      {/* Footer */}
      <Footer />
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
