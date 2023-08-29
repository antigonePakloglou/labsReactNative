
import { StyleSheet, View } from 'react-native';
import LoginScreen from './src/component/screens/LoginScreen';


export default function App() {


  //ush raccourci clavier
  
  return (
    <View style={styles.container}>
      <LoginScreen />
      
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  

});
