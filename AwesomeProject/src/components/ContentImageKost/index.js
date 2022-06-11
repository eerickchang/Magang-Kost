import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import {IconBack, ImageHome1, ImageHome2, ImageHome3} from '../../assets';
import Gap from '../Gap';

const ContentImageKost = ({onPress}) => {
  const [dataKost, setDataKost] = useState([
    {
      image: <ImageHome1 />,
      kostName: 'PrinceTon',
      key: 1,
    },
    {
      image: <ImageHome2 />,
      kostName: 'TantaTon',
      key: 2,
    },
    {
      image: <ImageHome3 />,
      kostName: 'OmTon',
      key: 3,
    },
    {
      image: <ImageHome2 />,
      kostName: 'QueenTon',
      key: 4,
    },
    {
      image: <ImageHome1 />,
      kostName: 'PadukaceTon',
      key: 5,
    },
    {
      image: <ImageHome3 />,
      kostName: 'PermaysuriTon',
      key: 6,
    },
  ]);
  return (
    <>
      {dataKost.map(item => (
        <TouchableOpacity
          onPress={onPress}
          activeOpacity={0.8}
          style={{marginRight: 15}}>
          {/* <Image source={item.image} /> */}
          <View>{item.image}</View>
          <TouchableOpacity activeOpacity={0.8} style={styles.contImage}>
            <Text style={styles.txtTitle}>{item.kostName}</Text>
            <Text style={styles.txtDetails}>Details</Text>
          </TouchableOpacity>
          {/* <Gap width={15} /> */}
        </TouchableOpacity>
      ))}
    </>
  );
};

export default ContentImageKost;

const styles = StyleSheet.create({
  contImage: {
    width: 86.44,
    height: 32.73,
    backgroundColor: 'black',
    opacity: 0.75,
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
    position: 'absolute',
    marginTop: 87.27,
  },
  txtTitle: {
    color: 'white',
    fontFamily: 'Poppins-Regular',
    fontSize: 10,
    marginTop: 3,
    textAlign: 'center',
  },
  txtDetails: {
    color: '#EBFF09',
    fontFamily: 'Poppins-Regular',
    fontSize: 8,
    textAlign: 'center',
  },
});
