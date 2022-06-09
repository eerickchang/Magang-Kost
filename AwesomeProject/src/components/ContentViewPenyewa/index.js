import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Gap from '../Gap';
import {
  BoardingHouse1,
  BoardingHouse2,
  HumanHead,
  WomanProfile,
} from '../../assets';

const ContentViewPenyewa = ({onPress}) => {
  return (
    <View>
      <View style={styles.contentWrapper}>
        <View style={styles.content}>
          <BoardingHouse1 />
          <View style={styles.details}>
            <Text
              style={{
                color: '#000000',
                fontWeight: 'bold',
                fontSize: 10,
                marginLeft: 124,
                marginTop: 7,
              }}>
              6 Tenants
            </Text>
            <View style={{marginTop: 15, marginLeft: 11}}>
              <Text
                style={{
                  fontWeight: 'bold',
                  color: '#000000',
                  fontSize: 20,
                }}>
                Princeton
              </Text>
              <View style={{flexDirection: 'row'}}>
                <WomanProfile />
                <Text
                  style={{
                    fontWeight: 'normal',
                    color: '#000000',
                    fontSize: 11,
                  }}>
                  $137 / Month
                </Text>
              </View>
            </View>
            <TouchableOpacity style={styles.buttonView} onPress={onPress}>
              <Text
                style={{color: '#000000', fontSize: 10, fontWeight: 'bold'}}>
                View &gt;
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <Gap height={19} />

        <View style={styles.content}>
          <BoardingHouse2 />

          <View style={styles.details}>
            <Text
              style={{
                color: '#000000',
                fontWeight: 'bold',
                fontSize: 10,
                marginLeft: 124,
                marginTop: 7,
              }}>
              3 Tenants
            </Text>
            <View style={{marginTop: 15, marginLeft: 11}}>
              <Text
                style={{fontWeight: 'bold', color: '#000000', fontSize: 20}}>
                Tantaton
              </Text>
              <View style={{flexDirection: 'row'}}>
                <HumanHead />
                <Text
                  style={{
                    fontWeight: 'normal',
                    color: '#000000',
                    fontSize: 11,
                  }}>
                  $137 / Month
                </Text>
              </View>
            </View>
            <TouchableOpacity style={styles.buttonView} onPress={onPress}>
              <Text
                style={{color: '#000000', fontSize: 10, fontWeight: 'bold'}}>
                View &gt;
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ContentViewPenyewa;

const styles = StyleSheet.create({
  contentWrapper: {
    height: 400,
    width: 322,
    backgroundColor: '#FFC700',
    alignSelf: 'center',
    borderRadius: 10,
    paddingVertical: 25,
  },
  content: {
    height: 143,
    width: 285,
    // position: 'absolute',
    backgroundColor: 'white',
    // marginTop: 25,
    marginLeft: 18,
    borderRadius: 10,
    flexDirection: 'row',
  },
  details: {
    flexDirection: 'column',
  },
  buttonView: {
    height: 18,
    width: 68,
    backgroundColor: '#FFC700',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 111,
    marginTop: 34,
  },
});
