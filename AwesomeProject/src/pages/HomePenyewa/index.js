import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import SearchHomePenyewa from '../../components/SearchHomePenyewa';
import ContentHomePenyewa from '../../components/ContentHomePenyewa';
import {ContentImageKost, Footer, Gap} from '../../components';
import {NavigationContainer} from '@react-navigation/native';
import {ImageHome1, ImageHome2, ImageHome3} from '../../assets';

const HomePenyewa = ({navigation}) => {
  return (
    <View>
      <SearchHomePenyewa />
      <ScrollView style={{height: 500}}>
        <View style={styles.container}>
          <Text style={styles.txt}>Kost Rekomendasi</Text>
          <Gap height={6} />
          <View style={styles.content}>
            <View style={{flexDirection: 'row'}}>
              <ScrollView style={{height: 300}} horizontal>
                <ContentImageKost
                  image={<ImageHome1 />}
                  kost={'Kost Princeton'}
                  onPressViewDetails={() => navigation.navigate('ViewDetails')}
                />
                <Gap width={15} />
                <ContentImageKost
                  image={<ImageHome2 />}
                  kost={'Kost Tantaton'}
                />
                <Gap width={15} />
                <ContentImageKost image={<ImageHome3 />} kost={'Kost Beton'} />
                <Gap width={15} />
                <ContentImageKost image={<ImageHome1 />} kost={'Kost Mipa'} />
                <Gap width={15} />
                <ContentImageKost image={<ImageHome2 />} kost={'Kost Mambu'} />
                <Gap width={15} />
                <ContentImageKost
                  image={<ImageHome3 />}
                  kost={'Kost Berlian'}
                />
              </ScrollView>
            </View>
          </View>
          <TouchableOpacity activeOpacity={0.8} style={styles.btn}>
            <Text style={styles.txtBtn}>View</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <Text style={styles.txt}>Kost Bersih</Text>
          <Gap height={6} />
          <View style={styles.content}>
            <View style={{flexDirection: 'row'}}>
              <ScrollView style={{height: 300}} horizontal>
                <ContentImageKost
                  image={<ImageHome1 />}
                  kost={'Kost Princeton'}
                  onPressViewDetails={() => navigation.navigate('ViewDetails')}
                  // onPressKostPopular={() => navigation.navigate('ViewDetails')}
                />
                <Gap width={15} />
                <ContentImageKost
                  image={<ImageHome2 />}
                  kost={'Kost Tantaton'}
                />
                <Gap width={15} />
                <ContentImageKost image={<ImageHome3 />} kost={'Kost Beton'} />
                <Gap width={15} />
                <ContentImageKost image={<ImageHome1 />} kost={'Kost Mipa'} />
                <Gap width={15} />
                <ContentImageKost image={<ImageHome2 />} kost={'Kost Mambu'} />
                <Gap width={15} />
                <ContentImageKost
                  image={<ImageHome3 />}
                  kost={'Kost Berlian'}
                />
              </ScrollView>
            </View>
          </View>
          <TouchableOpacity activeOpacity={0.8} style={styles.btn}>
            <Text style={styles.txtBtn}>View</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <Text style={styles.txt}>Kost Bisae</Text>
          <Gap height={6} />
          <View style={styles.content}>
            <View style={{flexDirection: 'row'}}>
              <ScrollView style={{height: 300}} horizontal>
                <ContentImageKost
                  image={<ImageHome1 />}
                  kost={'Kost Princeton'}
                  onPressViewDetails={() => navigation.navigate('ViewDetails')}
                />
                <Gap width={15} />
                <ContentImageKost
                  image={<ImageHome2 />}
                  kost={'Kost Tantaton'}
                />
                <Gap width={15} />
                <ContentImageKost image={<ImageHome3 />} kost={'Kost Beton'} />
                <Gap width={15} />
                <ContentImageKost image={<ImageHome1 />} kost={'Kost Mipa'} />
                <Gap width={15} />
                <ContentImageKost image={<ImageHome2 />} kost={'Kost Mambu'} />
                <Gap width={15} />
                <ContentImageKost
                  image={<ImageHome3 />}
                  kost={'Kost Berlian'}
                />
              </ScrollView>
            </View>
          </View>
          <TouchableOpacity activeOpacity={0.8} style={styles.btn}>
            <Text style={styles.txtBtn}>View</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <Text style={styles.txt}>Kost Bebas</Text>
          <Gap height={6} />
          <View style={styles.content}>
            <View style={{flexDirection: 'row'}}>
              <ScrollView style={{height: 300}} horizontal>
                <ContentImageKost
                  image={<ImageHome1 />}
                  kost={'Kost Princeton'}
                  // onPressKostPopular={() => navigation.navigate('ViewDetails')}
                />
                <Gap width={15} />
                <ContentImageKost
                  image={<ImageHome2 />}
                  kost={'Kost Tantaton'}
                />
                <Gap width={15} />
                <ContentImageKost image={<ImageHome3 />} kost={'Kost Beton'} />
                <Gap width={15} />
                <ContentImageKost image={<ImageHome1 />} kost={'Kost Mipa'} />
                <Gap width={15} />
                <ContentImageKost image={<ImageHome2 />} kost={'Kost Mambu'} />
                <Gap width={15} />
                <ContentImageKost
                  image={<ImageHome3 />}
                  kost={'Kost Berlian'}
                />
              </ScrollView>
            </View>
          </View>
          <TouchableOpacity activeOpacity={0.8} style={styles.btn}>
            <Text style={styles.txtBtn}>View</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <Footer />
    </View>
  );
};

export default HomePenyewa;

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 179,
    backgroundColor: '#FFC700',
    borderRadius: 8,
    marginLeft: 26,
    marginTop: 20,
  },
  content: {
    height: 120.5,
    marginLeft: 18,
    marginRight: 18,
    borderRadius: 10,
  },
  txt: {
    fontFamily: 'Poppins-SemiBold',
    marginLeft: 22,
    marginTop: 5,
    color: '#997700',
    height: 19,
  },
  btn: {
    width: 50,
    height: 16,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
    marginLeft: 230,
    marginTop: 6,
  },
  txtBtn: {
    fontFamily: 'Poppins-Regular',
    fontSize: 8,
    height: 12,
    color: 'black',
  },
});
