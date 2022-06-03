import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { IconBack, User } from '../../assets'
import Gap from '../Gap'

const HeaderAddOwner = () => {
  return (
    <View style={styles.container}>
      <View style={styles.roundedShape}/>
      <View style={styles.content}>
        <IconBack />
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
    height: 122,
    width: 366,
    backgroundColor: 'white',
    
  },
  content:
  {
    flexDirection: 'row',
    marginLeft: 16,
    marginTop: 23,
    // position: 'absolute'
  },
  roundedShape:
  {
    height: 122,
    width:136, 
    backgroundColor: '#FFC700', 
    position: 'absolute', 
    borderBottomRightRadius: 300
  }
})