
import { StyleSheet, View, Text, SectionList } from 'react-native';


export default function App() {
  const students = [
    {
      title: 'Ingé 1',
      data: [
        "Aline", 
        'Jack', 
        'Antigone'
      ]
    },
    {
      title: 'Ingé 2',
      data: [
        'Martin',
        'Michel',
        'Cindy',
        'Cédric',
      ]
    },
    {
      title: 'Ingé 2',
      data: [
        'Anna',
        'Léon',
        'Omar',
        'Corine',
      ]
    }
  ];


  return (
    <View style={styles.container}>

      <SectionList sections={students} 
      renderItem={({item})=> 
        <View style={styles.studentCard}>
          <Text style={styles.studentName}>{item}</Text>
        </View> 
      }
      keyExtractor={(item, index) => index}
      renderSectionHeader={ ({section}) =>  (
        <View style={styles.sectionHeader}>
          <Text style={styles.headerTitle}>{section.title}</Text>
        </View>
      )}
      renderSectionFooter={({section}) => (
        <View style={styles.sectionFooter}> 
          <Text style={styles.footerText}>Total {section.data.length}</Text>
        </View>
      )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  studentCard: {
    backgroundColor: 'grey',
    width: '100%',
    paddingHorizontal: 5,
    paddingVertical: 20,
    marginVertical: 5,
  },
  studentName :{
    color: 'pink',
    fontSize: 20
  },
  sectionHeader:{
    paddingHorizontal: 10,
    paddingVertical: 20,
    backgroundColor: 'pink',
    fontSize: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle : {
    color: 'black',
    fontWeight: 'bold'
  },
  sectionFooter:{
    paddingVertical: 10,
    alignItems: 'flex-end',
    paddingHorizontal: 10
  },
  footerText : {
    fontSize: 16
  }
 
});
