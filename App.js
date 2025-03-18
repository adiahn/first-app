import { useState } from "react";
import { StyleSheet, View, Text, FlatList, Alert, TouchableWithoutFeedback, Keyboard} from "react-native";
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";
import AddTodo from "./components/AddTodo";

export default function App() {
  const [todos, setTodos] = useState([
    {text:'Buy Coffe', key: '1'},
    {text:'Create an App', key: '2'},
    {text:'Play game', key: '3'},
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
        return prevTodos.filter(todo => todo.key != key)
    })
  }

  const submitHandler = (text) => {
    if(text.length > 3){
      setTodos((prevTodos) => {
        return [
          {text: text, key: Math.random().toString()}, ...prevTodos
        ]
      })
    }
    else {
      Alert.alert('OOPS!', 'Todos must be over 3 chars long', [{text: "Okay", onPress: () => console.log('Alert Closed')}])
    }

  }



  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
      Alert.alert('Keyboard', 'Keyboard closed', [{text: "Okay", onPress: () => console.log('Alert Closed')}])
    }}>

    <View style={styles.container}>
        <Header/>
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler}/>
          <View style={styles.list}>
            <FlatList 
              data={todos}
              renderItem={({item}) => (
                <TodoItem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
    </View>
</TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: 'white'
    },
    content: {
      padding: 40,
      flex: 1,
    },
    list: {
      flex: 1,
      marginTop: 20,
    }
})