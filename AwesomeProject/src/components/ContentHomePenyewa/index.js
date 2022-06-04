import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import {ImageHome1, ImageHome2, ImageHome3} from '../../assets';
import Gap from '../Gap';
import ContentImageKost from '../ContentImageKost';

const ContentHomePenyewa = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Kost Rekomendasi</Text>
      <Gap height={6} />
      <View
        style={{
          height: 120.5,
          //   backgroundColor: 'red',
          marginLeft: 18,
          //   flexDirection: 'row',
        }}>
        <View style={{flexDirection: 'row'}}>
          <ScrollView style={{height: 300}} horizontal>
            <ContentImageKost image={<ImageHome1 />} />
            <Gap width={15} />
            <ContentImageKost image={<ImageHome2 />} />
            <Gap width={15} />
            <ContentImageKost image={<ImageHome3 />} />
            <Gap width={15} />
            <ContentImageKost image={<ImageHome1 />} />
            <Gap width={15} />
            <ContentImageKost image={<ImageHome2 />} />
            <Gap width={15} />
            <ContentImageKost image={<ImageHome3 />} />
          </ScrollView>
        </View>
        <View
          style={{
            width: 50,
            height: 179,
            backgroundColor: 'white',
            position: 'absolute',
            top: -26,
            left: 281.9,
          }}
        />
      </View>
    </View>
  );
};

export default ContentHomePenyewa;

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 179,
    backgroundColor: '#FFC700',
    borderRadius: 8,
    marginLeft: 26,
    marginTop: 31,
  },
  txt: {
    fontFamily: 'Poppins-Regular',
    fontSize: 10,
    marginLeft: 22,
    marginTop: 9,
    color: '#997700',
    height: 11,
  },
});
