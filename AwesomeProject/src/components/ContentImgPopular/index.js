import {StyleSheet, Text, View, TouchableOpacity, Button, Image} from 'react-native';
import React, {useState} from 'react';
import { StarContent } from '../..';
import Gap from '../Gap';

const ContentImgPopular = () => {
  const [DataImgpopular] = useState([
    {
      image: require('../../assets/pictures/P1.jpg'),
      kostName: 'Kost Pricenton',
      location: 'Jl.Arnold Kanaan Aermadidi',
      price: '$500 / month',
      key: 1,
    },
    {
      image: require('../../assets/pictures/P2.jpg'),
      kostName: 'Kost Pricenton',
      location: 'Jl.Arnold Kanaan Aermadidi',
      price: '$500 / month',
      key: 2,
    },
  ]);
  return (
    <>
    {DataImgpopular.map(item => (
    <TouchableOpacity activeOpacity={0.8} key={item.key} style={styles.Cnt}>
    
    {/* {image} */}
    <Image source={item.image}/>
     
    <StarContent style={styles.StarContent}/>
    
        <TouchableOpacity activeOpacity={0.8} style={styles.contImage}> 
        <Text style={styles.txtTitle}>{item.kostName}</Text> 
        <Text style={styles.txtTitle}>{item.location}</Text>
        <Text style={styles.txtTitle}>{item.price}</Text>

        <Gap height={5}/>

        <TouchableOpacity
        activeOpacity={0.8}
        style={styles.btn}>
        <Text style={styles.txtBtn}>View</Text>
      </TouchableOpacity>
      </TouchableOpacity>

    </TouchableOpacity>
    
))}
</>
    
  );
};

export default ContentImgPopular;

const styles = StyleSheet.create({

  Cnt:{
    marginLeft: 17
 
  },

  contImage: {
    width: 124,
    height: 69,
    backgroundColor: 'black',
    opacity: 0.75,
    position: 'absolute',
    marginTop: 87.27,

  },
  txtTitle: {
    color: 'white',
    fontFamily: 'Poppins-Regular',
    fontSize: 8,
   
    
    
  },
  txtBtn: {
    fontFamily: 'Poppins-Regular',
    fontSize: 8,
    height: 12,
    color: 'white',
    backgroundColor: '#FFC700',
    with: 77,
    height: 16,
    marginHorizontal: 22,
    borderRadius: 2,
    textAlign: 'center',
  },

  StarContent:{
      position: 'absolute',
      marginRight: 30
  }
});
