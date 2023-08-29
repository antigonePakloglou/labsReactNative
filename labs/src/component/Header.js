
import { StyleSheet, View, Text,  } from 'react-native';



const Header = (props) => {

  return (
    <View style={styles.container}>
    <Text style={styles.text}>{props.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#C043F7',
    height: 150,
    justifyContent : 'center',
    alignItems : 'center'
  },
  text : {
    color: 'white', 
    fontSize: 22,
    fontWeight: 'bold'
  }
  

});

export default Header
