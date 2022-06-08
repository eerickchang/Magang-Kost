import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ContentHomeOwner, Gap} from '../../components';
import {User} from '../../assets';

const HomeOwner = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.subHeader}>
          <Text style={styles.greeting}>Hi George,</Text>

          <Text style={styles.greeting2}>Welcome Back!</Text>
        </View>
        <User style={styles.userIcon} />
      </View>
      <Gap height={20} />
      <View style={styles.Konten1}>
        <ContentHomeOwner
          backgroundColor="#FFC700"
          title={'Add Kost'}
          subTitle={'Already have 2 Kost'}
          buton={'Add'}
          onPress={() => navigation.navigate('AddOwner')}
        />
        <Gap height={20} />
        <ContentHomeOwner
          backgroundColor="#8FFF00"
          title={'View Book'}
          subTitle={'3 Rooms has been booked'}
          buton={'View'}
          onPress={() => navigation.navigate('ViewBookedOwner')}
        />
        <Gap height={20} />
        <ContentHomeOwner
          backgroundColor="#00FFB2"
          title={'View Tenant'}
          subTitle={'there are 3 tenants'}
          buton={'View'}
          onPress={() => navigation.navigate('ViewPenyewa')}
        />
      </View>
    </View>
  );
};

export default HomeOwner;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
  },
  subHeader: {},
  userIcon: {
    marginTop: 50,
    marginLeft: 102,
  },
  greeting: {
    marginTop: 41,
    marginLeft: 33,
    fontSize: 13,
    color: 'black',
  },
  greeting2: {
    marginTop: 2,
    marginLeft: 33,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
});
