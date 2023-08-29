
import { Button, StyleSheet, View } from 'react-native';
import CustomTextInput from '../CustomTextInput';
import Header from '../Header';


export default function LoginScreen() {


  //ush raccourci clavier


  return (
    <View style={styles.container}>
        <Header title="Todo App"/>
        <View style={styles.inputBlock}>
            <CustomTextInput placeholder = {"Username"} style={styles.input}  />
        </View>
        <View style={styles.inputBlock}>
            <CustomTextInput 
            placeholder = {"Password"} 
            secureTexteEntry
            style={styles.input} />
        </View>
      <Button title="Connexion" onPress={()=> {}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
  inputBlock: {
    width: '80%',
    justifyContent: 'center', 
    alignItems: 'center',
    marginTop: 40
   
  },
  input : {
    backgroundColor: 'pink',
    borderColor: 'black',
  }
 
});
