import { StyleSheet,ScrollView, View } from 'react-native'
import React from 'react'
import { ContentAddOwner, Gap, HeaderAddOwner } from '../../components'


const AddOwner = () => {
  return (
    <View>
      <HeaderAddOwner />
        <ContentAddOwner />
      {/* <FooterContoh /> */}
    </View>
  )
}

export default AddOwner

const styles = StyleSheet.create({})