import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {
  IconBackLeft,
  MatahariKuning,
  Tenants1,
  Tenants2,
  Tenants3,
  Tenants4,
  Tenants5,
  User,
  UserIconSmall,
} from '../../assets';
import {Footer, Gap, TenantsProfile} from '../../components';
import axios from 'axios';

const LanjutanViewPenyewa = ({navigation}) => {
  const [dataUser, setDataUser] = useState([]);

  useEffect(() => {
    axios
      .get('http://10.0.2.2:3004/users')
      .then(res => setDataUser(res.data.penyewa));
  }, []);

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
      {dataUser.map(item => (
        <View
          style={styles.content}
          showsVerticalScrollIndicator={false}
          key={item.id}>
          <Gap height={14} />
          <TenantsProfile
            name={item.name}
            phoneNumber={item.phone_number}
            image={item.photo}
          />
        </View>
      ))}
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
