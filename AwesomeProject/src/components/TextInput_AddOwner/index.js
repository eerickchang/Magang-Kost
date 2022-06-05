import { StyleSheet, Text, View, TextInput as TextInputRN } from 'react-native'
import React, {useState} from 'react'
import { PencilEdit } from '../../assets'
import Gap from '../Gap'


const TextInput_AddOwner = ({title, widthText, widthPencil}) => {
    const [kostName, setKostName] = useState({title});

  return (
      <View style={styles.container}>
      <Gap width={widthText}/>
        <TextInputRN 
        style={styles.input}
        placeholder={title} 
        onChangeText={(val) => setKostName(val)}/>
        <Gap width={widthPencil}/>
        <PencilEdit />
      </View>
  )
}

export default TextInput_AddOwner

const styles = StyleSheet.create({
    container:
    {
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        width: 162,
        // backgroundColor: 'yellow',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 8,
        flexDirection: 'row'
    },
    input:
    {
      fontSize: 13,
      // // fontFamily: 'Poppins-Regular'
      color: 'black',
    }
})