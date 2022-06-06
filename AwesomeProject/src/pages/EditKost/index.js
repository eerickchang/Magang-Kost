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

const Edit = () => {
  return (
    <View style={{flex: 1}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <TouchableOpacity>
            <IconBackLeft />
          </TouchableOpacity>
          <View style={styles.userIcon}>
            <UserIconSmall />
          </View>
        </View>
        <View>
          <Text style={styles.txtEditKost}>Edit Kost</Text>
        </View>
        <View style={styles.editKost}>
          <ListKost />
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

export default Edit;

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
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 32,
    marginTop: 20,
  },
  editKost: {
    marginTop: 16,
    marginLeft: 30,
    marginBottom: 60,
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
