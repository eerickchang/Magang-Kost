import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { IconBackLeft, User } from '../../assets'
import Gap from '../Gap'

const HeaderAddOwner = () => {
  return (
    <View style={styles.container}>
      <View style={styles.roundedShape}/>
      <View style={styles.content}>
        <IconBackLeft />
          <Gap width={238} />
          <User />
      </View>
    </View>
  )
}

export default HeaderAddOwner

const styles = StyleSheet.create({
  container:
  {
    // height: 122,
    // width: 360,
    // backgroundColor: 'black',
    position: 'absolute'
  },
  content:
  {
    flexDirection: 'row',
    marginLeft: 26,
    marginTop: 33,
    position: 'absolute',
    // backgroundColor: 'blue'
  },
  roundedShape:
  {
    height: 122,
    width:136, 
    backgroundColor: '#FFC700', 
    borderBottomRightRadius: 300,
  }
})