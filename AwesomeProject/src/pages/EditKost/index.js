import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import {
  HomeNavigation,
  UserNavigation,
  IconBackLeft,
  UserIconSmall,
} from '../../assets';
import {ListKost} from '../../components';

const EditKost = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.navigate('ProfilOwner')}>
            <IconBackLeft />
          </TouchableOpacity>
          <View style={styles.userIcon}>
            <UserIconSmall />
          </View>
        </View>
        <View>
          <Text style={styles.txtEditKost}>My Kost</Text>
        </View>
        <View style={styles.editKost}>
          <ListKost onPress={() => navigation.navigate('LanjutanEditKost')}/>
        </View>
      </ScrollView>
      <View style={styles.navigation}>
        <TouchableOpacity>
          <HomeNavigation />
        </TouchableOpacity>
        <TouchableOpacity>
          <UserNavigation style={styles.buttonUserNavigation} />
        </TouchableOpacity>
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
