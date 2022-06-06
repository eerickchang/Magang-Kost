import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';

import {
  Available,
  Description,
  IconBackLeft,
  Location,
  Price,
  Size,
  Star,
  Telephone,
} from '../../assets';

const ViewDetails = () => {
  const [dataPicture, setDataPicture] = useState([
    {image: require('../../assets/pictures/g1.jpg')},
    {image: require('../../assets/pictures/g2.jpg')},
    {image: require('../../assets/pictures/gVidio.png')},
    {image: require('../../assets/pictures/g3.jpg')},
    {image: require('../../assets/pictures/g4.jpg')},
    {image: require('../../assets/pictures/g5.jpg')},
    {image: require('../../assets/pictures/g6.jpg')},
  ]);
  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <TouchableOpacity>
            <IconBackLeft />
          </TouchableOpacity>
        </View>
        <View style={styles.viewTitleKost}>
          <Text style={styles.txtJudul}>Pricenton Home Stay</Text>
          <View style={styles.location}>
            <View style={styles.iconLocation}>
              <Location />
            </View>
            <Text>Jl. Kanaan, Airmadidi</Text>
            <View style={styles.star}>
              <View style={styles.iconStar}>
                <Star />
              </View>
              <Text style={styles.txtRating}> 4.9</Text>
              <Text style={styles.txtUlasan}> (Ulasan)</Text>
            </View>
          </View>
        </View>
        <View style={styles.picture}>
          <Image
            source={require('../../assets/pictures/g1.jpg')}
            style={styles.masterPicture}
          />
          <FlatList
            data={dataPicture}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => (
              <Image
                source={item.image}
                style={styles.secondaryPicture}
                resizeMode={'stretch'}></Image>
            )}
          />
        </View>
        <View style={styles.anotherInfo}>
          <View style={styles.viewTelephone}>
            <Telephone />
            <Text style={styles.txtTelephone1}>Owner</Text>
          </View>
          <Text style={styles.txtTelephone2}>0123456789</Text>
          <View style={styles.viewPrice}>
            <Price />
            <Text style={styles.txtPrice1}>Price Kost</Text>
          </View>
          <Text style={styles.txtPrice2}>$ 43 / Month</Text>
          <View style={styles.viewAvailable}>
            <Available />
            <Text style={styles.txtAvailable1}>Available</Text>
          </View>
          <Text style={styles.txtAvailable2}>2 room from 5 room</Text>
          <View style={styles.viewGarisLurus} />
          <View style={styles.viewSize}>
            <Size />
            <Text style={styles.txtSize1}>Size Room</Text>
          </View>
          <Text style={styles.txtSize2}>6 x 4 m</Text>
          <View style={styles.viewDescription}>
            <Description />
            <Text style={styles.txtDescription1}>Description</Text>
          </View>
          <Text style={styles.txtDescription2}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
          </Text>
        </View>
        <View style={styles.viewButtonBooking}>
          <TouchableOpacity style={styles.buttonBooking}>
            <Text style={styles.txtButton}>Booking</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default ViewDetails;

const styles = StyleSheet.create({
  container: {
    width: 136,
    height: 122,
    backgroundColor: '#FFC700',
    borderBottomRightRadius: 300,
    paddingLeft: 26,
    paddingTop: 36,
  },
  viewTitleKost: {
    marginTop: -60,
    marginLeft: 26,
  },
  txtJudul: {
    fontSize: 20,
    fontWeight: 'bold',
    width: 120,
    color: '#030303',
    marginTop: 16,
    marginBottom: 4,
  },
  location: {
    flexDirection: 'row',
    marginRight: 26,
  },
  iconLocation: {
    marginTop: 2,
  },
  star: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  iconStar: {
    marginTop: 2,
  },
  txtRating: {
    fontWeight: 'bold',
  },
  txtUlasan: {
    fontWeight: '300',
  },
  picture: {
    marginLeft: 26,
    marginRight: 26,
  },
  masterPicture: {
    width: 302,
    height: 180,
    borderRadius: 8,
    marginTop: 16,
  },
  secondaryPicture: {
    width: 74,
    height: 74,
    marginTop: 4,
    marginRight: 4,
    borderRadius: 8,
  },
  anotherInfo: {
    marginLeft: 42,
    marginTop: 30,
  },
  viewTelephone: {
    flexDirection: 'row',
  },
  txtTelephone1: {
    marginLeft: 10,
    fontWeight: 'bold',
  },
  txtTelephone2: {
    marginLeft: 25,
    marginBottom: 20,
  },
  viewPrice: {
    flexDirection: 'row',
  },
  txtPrice1: {
    marginLeft: 15,
    fontWeight: 'bold',
  },
  txtPrice2: {
    marginLeft: 25,
    marginBottom: 20,
  },
  viewAvailable: {
    flexDirection: 'row',
  },
  txtAvailable1: {
    marginLeft: 9,
    fontWeight: 'bold',
  },
  txtAvailable2: {
    marginLeft: 25,
    marginTop: -8,
  },
  viewGarisLurus: {
    flex: 1,
    height: 1,
    width: 48,
    backgroundColor: 'black',
    marginBottom: 18,
    marginLeft: 25,
  },
  viewSize: {
    flexDirection: 'row',
    marginLeft: -9,
  },
  txtSize1: {
    marginLeft: 0,
    fontWeight: 'bold',
  },
  txtSize2: {
    marginLeft: 25,
    marginBottom: 20,
  },
  viewDescription: {
    flexDirection: 'row',
    marginLeft: -2,
  },
  txtDescription1: {
    marginLeft: 9,
    fontWeight: 'bold',
  },
  txtDescription2: {
    marginLeft: 25,
    marginBottom: 20,
    marginRight: 26,
  },
  viewButtonBooking: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  buttonBooking: {
    width: 292,
    height: 49,
    borderRadius: 8,
    shadowRadius: 3,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtButton: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
