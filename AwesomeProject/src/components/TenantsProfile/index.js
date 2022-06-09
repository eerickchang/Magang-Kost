import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {
  Elipse,
  Job,
  LocationBlank,
  Tenants1,
  Tenants2,
  Tenants3,
  Tenants4,
  Tenants5,
} from '../../assets';
import Gap from '../Gap';

const TenantsProfile = ({name, price, location, job, icons}) => {
  const [tenantsProfile, setTenantsProfile] = useState([
    {
      key: 1,
      image: <Tenants1 />,
      name: 'Andre Waani',
      location: 'Bitung',
      job: 'UI Designer',
      phoneNumber: '+62-813-4369-3646',
      price: '$42',
      day: '4d',
    },
    {
      key: 2,
      image: <Tenants2 />,
      name: 'Rolando Suak',
      location: 'Mitra',
      job: 'Senior Developer',
      phoneNumber: '+62-852-9593-9235',
      price: '$67',
      day: '6d',
    },
    {
      key: 3,
      image: <Tenants3 />,
      name: 'Salomo Mandagi',
      location: 'Minut',
      job: 'Services',
      phoneNumber: '+62-813-4277-9235',
      price: '$34',
      day: '2d',
    },
    {
      key: 4,
      image: <Tenants4 />,
      name: 'Abelard Pangalila',
      location: 'Mitra',
      job: 'Programmer',
      phoneNumber: '+62-821-4272-9335',
      price: '$57',
      day: '5d',
    },
    {
      key: 5,
      image: <Tenants5 />,
      name: 'George Olaf',
      location: 'Bitung',
      job: 'UI Designer',
      phoneNumber: '+62-889-4272-9335',
      price: '$89',
      day: '7d',
    },
  ]);
  return (
    <>
      {tenantsProfile.map(item => (
        <View style={styles.container} key={item.key}>
          <View style={styles.photoName}>
            {item.image}
            <Gap width={12} />
            <View style={styles.namePhone}>
              <Gap height={2} />
              <Text style={styles.txtName}>{item.name}</Text>
              <Text style={styles.txtPhone}>{item.phoneNumber}</Text>
              <Gap width={32} />
              <Text style={styles.txtPrice}>{item.price}</Text>
            </View>
          </View>
          <Gap height={5} />
          <View style={styles.description}>
            <LocationBlank />
            <Text style={styles.txtLocation}>{item.location}</Text>
            <Gap width={70} />
            <Job />
            <Text style={styles.txtDesc}>{item.job}</Text>
            <Gap width={64} />
            <Elipse style={styles.elipseStyle} />
            <Gap width={101} />
            <Text style={styles.txtDay}>{item.day}</Text>
          </View>
        </View>
      ))}
    </>
  );
};

export default TenantsProfile;

const styles = StyleSheet.create({
  container: {
    height: 80,
    marginBottom: 28,
  },
  photoName: {
    flexDirection: 'row',
  },
  txtName: {
    color: '#030303',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
  },
  txtPhone: {
    color: '#030303',
    fontFamily: 'Poppins-Light',
    fontSize: 11,
    width: 120,
  },
  txtPrice: {
    color: '#DCAC00',
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    width: 71,
    textAlign: 'right',
    position: 'absolute',
    marginTop: 22,
    marginLeft: 143,
  },
  description: {
    flexDirection: 'row',
    // backgroundColor: 'yellow',
    width: 285,
    height: 40,
    paddingTop: 3,
  },
  txtDesc: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    color: '#030303',
    width: 112,
    position: 'absolute',
    marginLeft: 103,
  },
  txtLocation: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    color: '#030303',
    width: 43,
    position: 'absolute',
    marginLeft: 19,
  },
  elipseStyle: {
    position: 'absolute',
    marginLeft: 248,
    marginTop: 8,
  },
  txtDay: {
    color: '#030303',
    fontSize: 10,
    fontFamily: 'Poppins-Regular',
  },
});
