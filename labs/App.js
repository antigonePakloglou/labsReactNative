import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
    <View style={styles.carreBlock}>
      <View style={[styles.carre ,styles.carreOne]}>
          <Text style={styles.carreText}>Carré 1</Text>
      </View>
      <View style={[styles.carre ,styles.carreTwo]}>
        <Text style={styles.carreText}>Carré 2</Text>
      </View>
      <View style={[styles.carre ,styles.carreThree]}>
        <Text style={styles.carreText}>Carré 3</Text>
      </View>
    </View>
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
  carre: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  carreBlock: {
    //par defaut on est en affichage colone
    flex: 1,
    width: '100%',
    justifyContent: 'space-evenly'
  },

  carreOne:{
    flex: 1,
    backgroundColor: 'pink'
  },

  carreTwo: {
    flex: 2,
    backgroundColor: 'skyblue'
  },

  carreThree: {
    flex: 3,
    backgroundColor: 'purple'
  },

  carreText: {
    fontWeight: 'bold',
    color: 'white'
  },

});
