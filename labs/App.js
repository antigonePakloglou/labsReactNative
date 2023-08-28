
import { StyleSheet, View, Text, Image } from 'react-native';


export default function App() {


  return (
    <View style={styles.container}>
      <Text>Image depuis le télephone</Text>
      <Image style={styles.img} source={require('./assets/images/img1.jpg')} />
      <Text>Image depuis internet</Text>
      <Image style={styles.img} source={{uri: "https://th.bing.com/th/id/R.0e4a004c119aa6af10ef198adfbd0d0e?rik=b%2b76nu5Ou%2bcw6A&pid=ImgRaw&r=0"}} />
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
  img: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
    backgroundColor: 'red'
  },


});
