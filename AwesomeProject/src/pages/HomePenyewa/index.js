import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import SearchHomePenyewa from '../../components/SearchHomePenyewa';
import ContentHomePenyewa from '../../components/ContentHomePenyewa';
import {Footer} from '../../components';

const HomePenyewa = () => {
  return (
    <View>
      <SearchHomePenyewa />
      <ScrollView style={{height: 500}}>
        <ContentHomePenyewa suggest={'Kost Rekomendasi'} />
        <ContentHomePenyewa suggest={'Kost Bisae'} />
        <ContentHomePenyewa suggest={'Kost Top'} />
        <ContentHomePenyewa suggest={'Kost Afordabel'} />
      </ScrollView>
      <Footer />
    </View>
  );
};

export default HomePenyewa;

const styles = StyleSheet.create({});
