
import { useState, useEffect } from 'react';
import { StyleSheet, View, Image, FlatList, Dimensions } from 'react-native';

const WINDOW = Dimensions.get("window");
const IMG_URL = "https://picsum.photos/id/@id/200";

export default function App() {

  const [photos, setPhotos] = useState([]);

  useEffect(() => {
  let photoTmp = [];
  //crée url pour un nbr d'image définie
  for(var i=0; i < 50; i++){
    photoTmp.push({
      id: i, 
      url: IMG_URL.replace("@id", i)
    });
  }
   //mise a jour de la variable
   setPhotos(photoTmp);
  }, []);

  return (
    <View style={styles.container}>
      <FlatList 
        data={photos}
        renderItem={({item}) => (
          <Image style={styles.image}  source={{uri: item.url}}/>
        )}
        numColumns={3}
      />
   
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image : {
    height: 200,
    width: WINDOW.width / 3
  }
 
});
