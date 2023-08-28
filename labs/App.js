import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {


  const [cadreText, setCadreText] = useState(null);

  const handleClick = () => {
    setCadreText("Salut je m'appelle Antigone et je suis développeur !");
  
  }

  const renderCadre = cadreText && (
    <View style={[styles.cadre]}>
    <Text style={styles.text}>{cadreText}</Text>
  </View>
  )

  return (
    <View style={styles.container}>
      <Button title='Présentez vous' onPress={handleClick}></Button>
     {renderCadre}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //vertical
    justifyContent: 'center',
    //horizontal
    alignItems: 'center'
  },
  cadre: {
    //pour positionner le text on applique sur le parent
    backgroundColor: 'pink',
    width: '80%',
    height: 250,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    marginTop: 20
  },
  text: {
    fontWeight: 'bold',
    textAlign: 'center'
  }


});
