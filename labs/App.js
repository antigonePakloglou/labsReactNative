
import { Alert, StyleSheet, View } from 'react-native';
import LoginScreen from './src/component/screens/LoginScreen';
import { useState } from 'react';
import TodoScreen from './src/component/screens/TodoScreen';
import Users from './src/component/data/Users';

export default function App() {


  //ush raccourci clavier
  //on affiche la page de login par defaut
  const [showLoginScreen, setShowLoginScreen] = useState(true);

  const handleLogin = (username, password) => {
    var found = false;
    for(var user of Users){
        if(user.username === username && user.password === password){
            found = true;
        }
    }
    if (found){
        setShowLoginScreen(false);
    } else {
      Alert.alert("Erreur", "Username et/ou mot de passe incorrect !");
    }
}

  if(showLoginScreen){
    return (
    <LoginScreen onLogin={handleLogin}/>
    ); 
  }
  return (
      <TodoScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  

});
