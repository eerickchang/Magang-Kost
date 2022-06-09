import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {
  IconBackLeft,
  MatahariKuning,
  Tenants1,
  Tenants2,
  Tenants3,
  Tenants4,
  Tenants5,
  User,
} from '../../assets';
import {Footer, Gap, TenantsProfile} from '../../components';

const LanjutanViewPenyewa = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerWrapper}>
        <MatahariKuning />
        <View style={styles.headerProfile}>
          <Gap width={28} />
          <TouchableOpacity onPress={() => navigation.navigate('ViewPenyewa')}>
            <IconBackLeft />
          </TouchableOpacity>
          <Gap width={249} />
          <User />
        </View>
        <Text style={styles.txt}>6 Tenants Available</Text>
      </View>
      <Gap height={10} />
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <Gap height={14} />
        <TenantsProfile />
      </ScrollView>
      <View style={{height: 120, backgroundColor: '#fff'}} />
    </View>
  );
};

export default LanjutanViewPenyewa;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  headerProfile: {
    position: 'absolute',
    flexDirection: 'row',
    marginTop: 41,
  },
  txt: {
    color: '#030303',
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
    position: 'absolute',
    marginTop: 123,
    marginLeft: 25,
  },
  headerWrapper: {
    height: 154,
  },
  content: {
    height: 368,
    marginLeft: 38,
    marginRight: 38,
  },
});
