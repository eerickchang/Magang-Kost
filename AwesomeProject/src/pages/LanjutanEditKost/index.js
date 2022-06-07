import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import {
  IconBackLeft,
  ImgBlurEditKost,
  ImgEditKost,
  Pencil,
  User,
  AddImage,
} from '../../assets';
import {KontenTextInput, Gap, Button, ButtonLanjutanEditKost} from '../../components';

const LanjutanEditKost = () => {
  return (
    <View style= {{marginTop: 33}}>
      <ScrollView>
        <View style={styles.Header}>
          <IconBackLeft />
          <User style={styles.IconUser} />
        </View>
        <Text style={styles.Title}>Edit Kost</Text>
        <View>
          <View style={styles.KotakKonten}>
            <View style={styles.SubKotakKonten}>
              <ImgEditKost style={styles.ImgKost} />
              <ImgBlurEditKost style={styles.ImgBlur} />
              <View style={{flexDirection: 'row'}}>
              <Text style={styles.TitleKonten}>Princeton</Text>
              <Gap width={9}/>
              <Pencil />
              
              
              </View>
              <View style={{marginTop: 24, marginLeft: 55, alignItems: 'center'}}>
              {/* <Gap height={24}/> */}
              <AddImage />
              <Text style={{color: 'black'}}>Add Image</Text>
              <View>
              </View>
              </View>
            </View>
            <Text style={styles.SubTitleKonten}>Edit Detail Kost</Text>
            <Gap height={20} />
            <View style={styles.KontenTextInput}>
              <KontenTextInput Title={'Address'} SubTitle={'Aermadidi, Kanaan No 12'} Width={20}/>
              <Gap height={20} />
              <KontenTextInput Title={'Phone Number'} SubTitle={'08981865951'} Width={90}/>
              <Gap height={20} />
              <KontenTextInput Title={'Price Kost'} SubTitle={'2 From 6 Room'} Width={78} />
              <Gap height={20} />
              <KontenTextInput Title={'Available'} SubTitle={'08981865951'} Width={84}/>
              <Gap height={20} />
              <KontenTextInput Title={'Type Kost'} SubTitle={'6 x 3 m'} Width={124}/>
              <Gap height={20} />
              <KontenTextInput Title={'Size Room '} SubTitle={'08981865951'} Width={85}/>
              <Gap height={20} />
              <KontenTextInput Title={'Description'} SubTitle={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '} Width={135}/>
              <Gap height={20} />
            
            </View>
            <View style={{marginLeft:45, borderRadius: 8}}>
            <ButtonLanjutanEditKost style={{borderRadius: 8}}/>
            </View>
          </View>
          
        </View>
      </ScrollView>
    </View>
  );
};

export default LanjutanEditKost;

const styles = StyleSheet.create({
  Header: {
    flexDirection: 'row',
    marginLeft: 30,
    
  },
  IconUser: {
    marginLeft: 238,
  },
  Title: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 22,
    marginLeft: 33,
  },
  TitleKonten: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    // position: 'absolute',
    marginLeft: 47,
    // flexDirection: 'row',
  },
  KotakKonten: {
    backgroundColor: '#FFC700',
    elevation: 4,
    width: 348,
    height: 994,
    borderRadius: 10,
    marginTop: 10,
  },
  SubKotakKonten: {
    marginTop: 40,
    width: 291,
    height: 128,
    // flexDirection: 'row',
    // marginRight: 20,
  },
  ImgKost: {
    marginLeft: 28,
    position: 'absolute',
  },
  ImgBlur: {
    position: 'absolute',
    marginLeft: 28,
  },
  SubTitleKonten: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    color: 'black',
    marginTop: 16,
    marginLeft: 33,
  },
  KontenTextInput: {
    paddingLeft: 33,
  },
});
