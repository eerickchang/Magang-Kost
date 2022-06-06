import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {Gap, TextInput} from '../../components';
import {LogoKecil} from '../../assets';

const LoginUser = () => {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
      }}>
      <View style={{marginTop: 82}}>
        <LogoKecil width={107} height={82} />
      </View>

      <Text style={styles.Ocop}> Login</Text>
      <Gap height={44} />

      <Gap height={25} />

      <TextInput title={'Username'} />
      <Gap height={23} />
      <TextInput title={'Password'} />
      <Gap height={23} />

      <View style={styles.Kotak}>
        <View style={styles.Centang}></View>
        <Text style={styles.txtCentang}>remember me?</Text>
      </View>

      <Gap height={51} />
      <TouchableOpacity style={styles.Button}>
        <Text style={styles.textLog}>Login</Text>
      </TouchableOpacity>

      <Gap height={39} />
      <View style={styles.Signin}>
        <Text style={styles.txtSignin}>don't have an account? </Text>
        <TouchableOpacity>
          <Text style={styles.txtSigninBold}> sign up</Text>
        </TouchableOpacity>
      </View>
      <View style={{backgroundColor: '#fff', height: 81}} />
    </View>
  );
};

export default LoginUser;

const styles = StyleSheet.create({
  Ocop: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#000000',
  },
  Button: {
    // borderWidth: 1,
    backgroundColor: '#FFDD66',
    width: 261,
    height: 49,
    borderRadius: 6,
    marginLeft: 49,
    marginRight: 50,

    justifyContent: 'center',
    alignItems: 'center',
  },
  textLog: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#000000',
  },
  Kotak: {
    width: 134,
    height: 16,
    flexDirection: 'row',
    marginLeft: 51,
    marginRight: 175,
  },
  Centang: {
    borderWidth: 1,
    width: 14,
    height: 14,
  },
  txtCentang: {
    width: 127,
    height: 16,
    marginLeft: 7,

    color: '#000000',
  },
  Signin: {
    flexDirection: 'row',
    width: 304,
    height: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtSignin: {
    color: '#000000',
  },
  txtSigninBold: {
    fontWeight: 'bold',
    color: '#000000',
  },
});
