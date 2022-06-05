import { StyleSheet, View, ScrollView } from 'react-native'
import React from 'react'
import { ContentAddOwner, HeaderAddOwner} from '../../components'


const AddOwner = () => {
  return (
    <View>
      <HeaderAddOwner />
      {/* <HeaderOwner /> */}
      <ContentAddOwner />
      {/* <FooterContoh /> */}
    </View>
  )
}

export default AddOwner

const styles = StyleSheet.create({})