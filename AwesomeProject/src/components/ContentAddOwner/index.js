import { StyleSheet, View, ScrollView,Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { AddImage} from '../../assets'
import TextInput_AddOwner from '../TextInput_AddOwner'
import Gap from '../Gap'

const ContentAddOwner = () => {
  return (
    <ScrollView >
    <View style={styles.container}>
      <AddImage />
      <Gap height={22} />
      <TextInput_AddOwner title={"Kost Name"} widthText={40} widthPencil={23}/>
      <Gap height={14} />
      <TextInput_AddOwner title={"Phone Number"} widthText={32} widthPencil={9}/>
      <Gap height={14} />
      <TextInput_AddOwner title={"Price"} widthText={55} widthPencil={40}/>
      <Gap height={14} />
      <TextInput_AddOwner title={"Size"} widthText={58} widthPencil={40}/>
      <Gap height={14} />
      <TextInput_AddOwner title={"Type"} widthText={55} widthPencil={40}/>
      <Gap height={14} />
      <TextInput_AddOwner title={"Adress"} widthText={50} widthPencil={30}/>
      <Gap height={14} />
      <TextInput_AddOwner title={"Description"} widthText={35} widthPencil={18}/>
      <Gap height={14} />
      <TextInput_AddOwner title={"Available"} widthText={42} widthPencil={28}/>
      <Gap height={14} />
      <TouchableOpacity style={{height: 27, width: 96, marginHorizontal: 132, backgroundColor: '#FFC700',
      justifyContent: 'center', alignItems: 'center', borderRadius: 8}}>
        <Text style={{color: '#000000', fontWeight: 'bold'}}>Add</Text>
      </TouchableOpacity>
      <Gap height={15} />
    </View>
    </ScrollView>
  
  )
}

export default ContentAddOwner

const styles = StyleSheet.create({
    container:
    {
        justifyContent: 'center',
        alignItems: 'center',
    }
})