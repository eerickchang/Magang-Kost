import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button, HeaderSignUp, TextInput, Gap} from '../../components';

const SignUp = () => {
  return (
    <View style={styles.container}>
      <View style={styles.input}>
        <HeaderSignUp />
        <TextInput title="Username" />
        <Gap height={26} />
        <TextInput title="Password" />
        <Gap height={22} />
        <TextInput title="Email" />
        <Gap height={22} />
        <TextInput title="No Telepon" />
      </View>
      <View style={styles.button}>
       <Text style={styles.textButton 
       
       }>Sign Up</Text>
       
      </View>
      <View style={styles.textBawah}>
       <Text>Already have an account? login</Text>
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {},
  button:{
    width: 261,
    height: 49,
    backgroundColor: '#FFC700',
    marginTop: 26,
    borderRadius: 8,
  },
  textButton: {
    fontSize: 18,
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    marginTop: 9,
    marginLeft: 96,
    
  },
  textBawah: {
    marginTop: 31,
    fontSize: 13,
  },
});
