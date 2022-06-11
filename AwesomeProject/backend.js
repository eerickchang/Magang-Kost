import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const App = () => {
  const name = 'Erick';
  let usia = 21;
  const isMan = true;

  const HewanPeliharaan = {
    nama: 'Miaw',
    jenis: 'Kucing',
    usia: 2,
    isLokal: true,
    warna: 'Merah',
    orangTua: {
      jantan: 'Kaisar',
      betina: 'Quin',
    },
  };

  const sapaOrang = (name, age) => {
    console.log(`Hello ${name} usia anda ${age} `);
  };

  const namaOrang = ['Erick', 'Salomo', 'Ando'];

  typeof namaOrang;

  if (HewanPeliharaan.nama === 'Miaw') {
    console.log('Hallo Miaw');
  } else {
    console.log('Hewan siapa ini?');
  }

  const sapaHewan = objectHewan => {
    // let hasilSapa = '';
    // if (objectHewan.nama === 'Miaw') {
    //   hasilSapa = 'Halo Miaw';
    // } else {
    //   hasilSapa = 'Hewan siapa ini?';
    // }
    // return hasilSapa;

    return objectHewan.nama === 'Miaw' ? 'Halo Miaw' : 'Hewan siapa ini?';
  };

  return (
    <View style={styles.container}>
      <Text style={styles.txt}>App</Text>
      <Text>Name: {name}</Text>
      <Text>Usia: {usia}</Text>
      <Text>Jenis Kelamin: {isMan}</Text>
      <Text>{sapaHewan(HewanPeliharaan)}</Text>
      <Text>{namaOrang[0]}</Text>
      {namaOrang.map(orang => (
        <Text>{orang}</Text>
      ))}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {},
});
