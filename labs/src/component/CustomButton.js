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
        width: '70%',
        backgroundColor: 'pink',
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text :{
        color: 'white',
        fontWeight: 'bold',
        fontSize: 25
    },
})

export default CustomButton