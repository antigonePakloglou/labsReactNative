
import { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Pressable,  } from 'react-native';
import useStorage from './hooks/useStorage';
import { AntDesign } from '@expo/vector-icons';

const userTokenKey = 'token';

const Header = (props) => {
  
    const showLogoutBtn = !props.isLogged && (
        <Pressable onPress={()=> props?.logout()}>
                <AntDesign name="logout" size={24} color="white" />
        </Pressable>
    )

  return (
    <View style={styles.container}>
    <Text style={styles.text}>{props.title}</Text>
    {
        showLogoutBtn
    }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#C043F7',
    height: 150,
    justifyContent : 'center',
    alignItems : 'center',
    flexDirection: 'row'
  },
  text : {
    color: 'white', 
    fontSize: 22,
    fontWeight: 'bold',
    marginRight: 20
  }
  

});

export default Header
