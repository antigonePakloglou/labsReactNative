import {StyleSheet, Text, Pressable } from 'react-native';
import React from 'react';

const CustomButton = ({title, onPress}) => {
  return (
    <Pressable style={styles.btn} onPress={onPress}>
      <Text style={styles.text}> {title}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    btn: {
        height: 45,
        width: '100%',
        backgroundColor: '#D4F743',
        borderRadius: 30,
        justifyContent : 'center',
        alignItems : 'center'
      
    },
    text :{
        color: 'black',
        fontWeight: 'bold',
        fontSize: 15,
    },
})

export default CustomButton