
import { StyleSheet, View, Text, Alert, FlatList, Pressable } from 'react-native';
import { useState } from 'react';
import { AntDesign } from '@expo/vector-icons'; 
import CustomTextInput from '../CustomTextInput';
import CustomButton from '../CustomButton';
import Header from '../Header';

export default function TodoScreen() {

  //ush raccourci clavier
  const [todo, setTodo] = useState();
  const [todos, setTodos] = useState(
    [
      {id: '1', name : 'Sortir le chien'},
      {id: '2', name : 'Faire le TP'},
      {id: '3', name : 'Soutenance oral'},
  
    ]
  );

  const addTodo = () => {
    if(todo === ""){
      Alert.alert('Information', 'Veuillez saisir une tache !');
      return;
    }
    const newTodo = {id: todo.length , name : todo};
    setTodos( currentTodos => [newTodo, ...currentTodos] );
    setTodo("");
  }

  const deleteTodo = (item) => {
    Alert.alert(
      "Suppression", "Voulez-vous supprimer " + item.name + " ?",
        [
          {
            text : 'Oui',
            onPress: () => {
              setTodos( currentTodos => currentTodos.filter((el) => el.id !== item.id));
            }
          },
          {
            text : 'Annuler'
          }
        ]
      );
  }

  return (
    <View style={styles.container}>
      <Header title="Antigone Todo App"/>
      <View style={styles.inputBlock}>
        <CustomTextInput 
          placeholder='Saisissez une tache'
          value={todo}
          onChangeText={(text)=> setTodo(text)}
        />
      </View> 
      <View style={styles.inputBlock}>
      <CustomButton 
        title='Valider'
        onPress={addTodo}
      />
      </View>
      
      <FlatList 
        data={todos}
        renderItem={({item}) => (
          <View style = {styles.todoBlock}>
            <Text style={styles.todoText}>{item.name}</Text>
            <Pressable onPress={() => deleteTodo(item)}>
              <AntDesign name="closecircleo" size={24} color='white'/>
            </Pressable>
           
          </View>
          )}
          keyExtractor={(item, index) => item.id}
      />
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  
  textInputRender : {
    marginVertical: 20
  },
  inputBlock : {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: 20,
  },
  todoBlock : {
    backgroundColor : '#F743D4',
    marginHorizontal: 20,
    marginVertical: 20,
    padding: 10,
    flexDirection : 'row'
  },
todoText : {
  fontSize : 16,
  fontWeight: 'bold',
  //prend tout l'espace dispo
  flexGrow: 1
}
  

});
