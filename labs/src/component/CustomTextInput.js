
import { StyleSheet, TextInput } from 'react-native';
import React from 'react'

//rnfe pour cree raccourci clavier 
const CustomTextInput = (props) => {
  return (
    <TextInput 
    {...props}
        style={[styles.textInput, props.style]}
    />
  )
}

const styles = StyleSheet.create({
    textInput: {
        width: '80%',
        height: 40,
        borderColor: 'pink',
        borderWidth: 1,
        paddingHorizontal: 15,
        marginBottom: 30,
        borderRadius: 10,
        fontSize: 15
      },
})

export default CustomTextInput