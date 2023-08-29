
import { StyleSheet, View } from 'react-native';
import CustomTextInput from '../CustomTextInput';
import Header from '../Header';
import { useState } from 'react';
import CustomButton from '../CustomButton';


const LoginScreen = (props) => {

//ush raccourci clavier
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");


  return (
    <View style={styles.container}>
        <Header title="Antigone Todo App"/>
        <View style={styles.inputBlock}>
            <CustomTextInput 
                value={username}
                placeholder = {"Username"} style={styles.input}  
                onChangeText={(text) => setUsername(text)}
            />
        </View>
        <View style={styles.inputBlock}>
            <CustomTextInput 
                value= {password}
                placeholder = {"Password"} 
                style={styles.input} 
                onChangeText={(password) => setPassword(password)}
            />
        </View>

      <CustomButton title="Connexion" onPress={() => props.onLogin(username, password)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputBlock: {
    width: '100%',
    marginTop: 40,
    justifyContent: 'center', 
    alignItems: 'center',
   
  },
  input : {
    backgroundColor: '#F743D4',
    borderColor: 'black',
  }
 
});


export default LoginScreen