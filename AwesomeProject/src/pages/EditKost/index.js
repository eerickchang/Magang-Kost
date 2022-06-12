import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {
  HomeNavigation,
  UserNavigation,
  IconBackLeft,
} from '../../assets';
import {ListKost} from '../../components';
import axios from 'axios';
import { TabFooterO } from '../../routers';

const EditKost = ({navigation}) => {
  const [dataKost, setDataKost] = useState([]);
  const [dataOwner, setDataOwner] = useState([]);

  useEffect(() => {
    axios.get('http://10.0.2.2:3004/kost').then(res => setDataKost(res.data));
  }, [dataKost]);

  useEffect(() => {
    axios
      .get('http://10.0.2.2:3004/users')
      .then(res => setDataOwner(res.data.owner));
  }, [dataOwner]);
  return (
    <View style={{flex: 1}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.navigate('ProfilOwner')}>
            <IconBackLeft />
          </TouchableOpacity>
          <View style={styles.userIcon}>
            {dataOwner.map(item => (
              <Image
                key={item.id}
                source={{uri: `${item.photo}`}}
                style={{width: 30, height: 30, borderRadius: 50}}
              />
            ))}
          </View>
        </View>
        <View>
          <Text style={styles.txtEditKost}>My Kost</Text>
        </View>
        <View style={styles.editKost}>
          {dataKost.map(item => (
            <ListKost
              onPress={() => navigation.navigate('LanjutanEditKost')}
              image={item.photo}
              kostName={item.kost_name}
              location={item.address}
              price={item.price}
              key={item.id}
            />
          ))}
        </View>
      </ScrollView>
      <View style={styles.navigation}>
        {/* <TouchableOpacity>
          <HomeNavigation />
        </TouchableOpacity>
        <TouchableOpacity>
          <UserNavigation style={styles.buttonUserNavigation} />
        </TouchableOpacity> */}
        <TabFooterO/>
      </View>
      
    </View>
  );
};

export default EditKost;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    paddingTop: 36,
    paddingLeft: 26,
  },
  userIcon: {
    flex: 1,
    alignItems: 'flex-end',
    marginRight: 42,
  },
  txtEditKost: {
    fontSize: 24,
    fontFamily: 'Poppins-Bold',
    color: 'black',
    marginLeft: 32,
    marginTop: 20,
  },
  editKost: {
    marginTop: 10,
    marginLeft: 30,
    paddingBottom: 60,
    // flex: 1
  },
  navigation: {
    flexDirection: 'row',
    backgroundColor: '#E5E5E5',
    justifyContent: 'center',
    alignItems: 'center',
    height: 58,
    bottom: 0,
    left: 0,
    right: 0,
    position: 'absolute',
  },
  buttonUserNavigation: {
    marginLeft: 80,
  },
});
