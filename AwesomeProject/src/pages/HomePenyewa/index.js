import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import SearchHomePenyewa from '../../components/SearchHomePenyewa';
import ContentHomePenyewa from '../../components/ContentHomePenyewa';
import {Footer} from '../../components';

const HomePenyewa = () => {
  return (
    <View>
      <ScrollView style={{height: 576}}>
        <SearchHomePenyewa />
        <ContentHomePenyewa />
        <ContentHomePenyewa />
        <ContentHomePenyewa />
        <ContentHomePenyewa />
      </ScrollView>
      <Footer />
    </View>
  );
};

export default HomePenyewa;

const styles = StyleSheet.create({});
