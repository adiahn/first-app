import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList} from 'react-native';

function App() {
  const [navItems, setnavItems] = useState([
    {item: "Home", id: 1},
    {item: "About", id: 2},
    {item: "Gallery", id: 3},
    {item: "Contact", id: 4}
  ])  

const pressHandler = (id) => {
    console.log(id)
    setnavItems((prevPeople) => {
      return prevPeople.filter(item => item.id != id)
    })
  }



  return (
    <View style={styles.container}>
      <View>
        <FlatList 
            data={navItems}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => (
              <TouchableOpacity onPress={() => pressHandler(item.id) }>
                <Text style={styles.item}>{item.item}</Text>
              </TouchableOpacity>
            )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5'
  },
  item:{
    margin: 20,
    padding: 24,
    backgroundColor: 'red',
    color: 'white',
    width: 300,
    textAlign: 'center',
    fontSize: 24,
    borderRadius: 4
  }
});


export default App;