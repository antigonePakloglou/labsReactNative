
import { StyleSheet, View, TextInput, Button, Text, Alert, FlatList, Pressable } from 'react-native';
import { useState } from 'react';
import { AntDesign } from '@expo/vector-icons'; 
import CustomTextInput from '../CustomTextInput';

export default function TodoScreen() {


  //ush raccourci clavier
  const [todo, setTodo] = useState();
  const [todos, setTodos] = useState(
    [
      {id: '1', name : 'Todo 1'},
      {id: '2', name : 'Todo 2'},
      {id: '3', name : 'Todo 3'},
  
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
      "Suppression", "Étes vous sur de vouloir supprimer ?" + item.name,
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
      <View style={styles.inputBlock}>
        <CustomTextInput 
          placeholder='Saisissez une tache'
          value={todo}
          onChangeText={(text)=> setTodo(text)}
        />
      </View> 
      <View style={styles.inputBlock}>
      <Button 
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
              <AntDesign name="closecircleo" size={24} color="black" color='red'/>
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
    backgroundColor : 'skyblue',
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
