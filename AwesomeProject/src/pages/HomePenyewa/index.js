import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import SearchHomePenyewa from '../../components/SearchHomePenyewa';
import ContentHomePenyewa from '../../components/ContentHomePenyewa';
import {Footer} from '../../components';

const HomePenyewa = ({navigation}) => {
  return (
    <View>
      <SearchHomePenyewa />
      <ScrollView style={{height: 402}}>
        <ContentHomePenyewa
          suggest={'Kost Popular'}
          onPressDetailPrinceton={() => navigation.navigate('ViewDetails')}
        />
        <ContentHomePenyewa
          suggest={'Kost Bisae'}
          onPressDetailPrinceton={() => navigation.navigate('ViewDetails')}
        />
        <ContentHomePenyewa
          suggest={'Kost Top'}
          onPressDetailPrinceton={() => navigation.navigate('ViewDetails')}
        />
        <ContentHomePenyewa
          suggest={'Kost Afordabel'}
          onPressDetailPrinceton={() => navigation.navigate('ViewDetails')}
        />
      </ScrollView>
      {/* <Footer /> */}
    </View>
  );
};

export default HomePenyewa;

const styles = StyleSheet.create({});
