import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image
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
  const [dataOwner, setDataOwner] = useState([]);

  useEffect(() => {
    axios
      .get('http://10.0.2.2:3004/users')
      .then(res => setDataUser(res.data.penyewa));
  }, [dataUser]);

  useEffect(() => {
    axios.get('http://10.0.2.2:3004/users').then(res => setDataOwner(res.data.owner));
  }, [dataOwner])

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
          {dataOwner.map(item => (
            <Image key={item.id} source={{uri: `${item.photo}`}} style={{width: 30, height: 30, borderRadius: 50}}/>
          ))}
        </View>
        <Text style={styles.txt}>6 Tenants Available</Text>
      </View>
      <Gap height={14} />
      <ScrollView showsVerticalScrollIndicator={false}>
        {dataUser.map(item => (
          <View style={styles.content} key={item.id}>
            <TenantsProfile
              name={item.name}
              phoneNumber={item.phone_number}
              image={item.photo}
            />
            <Gap height={28} />
          </View>
        ))}
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
    marginLeft: 38,
    marginRight: 38,
  },
});
