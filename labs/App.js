
import { ActivityIndicator, Alert, StyleSheet, View } from 'react-native';
import LoginScreen from './src/component/screens/LoginScreen';
import { useEffect, useState } from 'react';
import TodoScreen from './src/component/screens/TodoScreen';
import Users from './src/component/data/Users';
import useStorage from './src/component/hooks/useStorage';

const userTokenKey = 'token';

export default function App() {


  //ush raccourci clavier
  //on affiche la page de login par defaut
  const [showLoginScreen, setShowLoginScreen] = useState(true);
  const {setDataInStorage, getDataFromStorage} = useStorage();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkToken = () => {
      getDataFromStorage(userTokenKey).then((data) =>{
        console.log(data);
        //si on a deja un token on affiche pas la page de login
        if(data){
          setShowLoginScreen(false);
        }
        setLoading(false);
      })
    }
    checkToken();
  }, []);

  //vérification logins renseignés avec ceux enregistreés
  const handleLogin = async (username, password) => {
    var found = false;
    var userToken = null;
    for(var user of Users){
        if(user.username === username && user.password === password){
            found = true;
            userToken = user.token;
        }
    }
    if (found){
      await setDataInStorage(userTokenKey, userToken)
        setShowLoginScreen(false);
    } else {
      Alert.alert("Erreur", "Username et/ou mot de passe incorrect !");
    }
}

  if(loading){
    return (
      <View style = {styles.loadingContainer}>
        <ActivityIndicator size={'large'} color= {'#D4F743'}/>
      </View>

    )
  }
  //si on est pas déja loggé
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
  loadingContainer: {
    flex : 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
