import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import ButtonEditDelete from '../ButtonEditDelete';

const ListKost = () => {
  const [dataKost, setDataKost] = useState([
    {
      image: require('../../assets/pictures/g1.jpg'),
      kostName: 'Pricenton',
      wifi: 'Free Wifi',
      location: 'Jl. Salomo Ikeh',
      price: '$42 / month',
      key: 1,
    },
    {
      image: require('../../assets/pictures/g2.jpg'),
      kostName: 'Tantaton',
      wifi: 'Free Wifi',
      location: 'Jl. Ando Kimochi',
      price: '$100 / month',
      key: 2,
    },
    {
      image: require('../../assets/pictures/g3.jpg'),
      kostName: 'Omtono',
      wifi: 'Free Wifi',
      location: 'Jl. Sumandre Wik-Wik',
      price: '$72 / month',
      key: 3,
    },
    {
      image: require('../../assets/pictures/g4.jpg'),
      kostName: 'Mamaton',
      wifi: 'Free Listrik',
      location: 'Jl. Gerald Sugiono',
      price: '$10 / month',
      key: 4,
    },
    {
      image: require('../../assets/pictures/g5.jpg'),
      kostName: 'Papaton',
      wifi: 'Free Air',
      location: 'Jl. Olaf Ara-Ara',
      price: '$80 / month',
      key: 5,
    },
  ]);
  return (
    <View>
      {dataKost.map(item => (
        <View style={styles.viewListKost} key={item.key}>
          <Image source={item.image} style={styles.image} />
          <View style={styles.viewTitle}>
            <Text style={styles.txtTitle}>{item.kostName}</Text>
            <Text style={styles.txtLocation}>{item.location}</Text>
            <Text style={styles.txtWifi}>{item.wifi}</Text>
            <View style={styles.viewTxtPrice}>
              <Text style={styles.txtPrice}>{item.price}</Text>
            </View>
            <View style={styles.viewButton}>
              <ButtonEditDelete btnName={'Edit'} color={'white'} />
              <View style={styles.button}>
                <ButtonEditDelete btnName={'Delete'} color={'red'} />
              </View>
            </View>
          </View>
          <View></View>
        </View>
      ))}
    </View>
  );
};

export default ListKost;

const styles = StyleSheet.create({
  viewListKost: {
    backgroundColor: '#FFC700',
    width: 294,
    height: 136,
    borderRadius: 10,
    flexDirection: 'row',
    marginBottom: 22,
  },
  image: {
    width: 150,
    height: 136,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  viewTitle: {
    marginTop: 12,
    marginLeft: 12,
    flex: 1,
  },
  txtTitle: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  txtLocation: {
    color: 'black',
    fontSize: 10,
    marginBottom: 2,
  },
  txtWifi: {
    color: 'white',
    fontSize: 9,
  },
  viewTxtPrice: {
    alignItems: 'flex-end',
    marginTop: 14,
  },
  txtPrice: {
    marginRight: 14,
    color: 'black',
    fontWeight: 'bold',
  },
  viewButton: {
    flexDirection: 'row',
    marginTop: 4,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    marginRight: 14,
  },
  button: {
    marginLeft: 8,
  },
});
