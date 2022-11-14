import { useState } from "react";
import { Button, StyleSheet, Text, View, FlatList, Alert } from "react-native";
import Header from "./components/Header";
import ItemList from "./components/ItemList";
import AddTodo from "./components/AddTodo"

function App() {
  const [todos, setTodos] = useState([
    {title: 'The Secrate', key: 1},
    {title: 'Win Friends', key: 2},
    {title: 'Influence People', key: 3}
  ])

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key)
    })
  }

  const addTodo = (text, setText) => {
    
      if(text.length >= 5){
        setTodos((prevTodos) => {
          return [
            {title: text, key: Math.random().toString()},
            ...prevTodos
          ]
          
        })
        setText('')
      }else{
        Alert.alert('OPPS!', 'Todos must be over 3 chars long!', [
          {text: 'Understand', onPress: () => console.log('Alert Closed!')}
        ])
      }
    
    
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/**Header */}
        <Header todoLen={todos.length}/>
      </View>
      <View style={styles.content}>
      <View>
        {/**Input / Form */}
        <AddTodo addTodo={addTodo}/>
      </View>
      <View style={styles.list}>
        <FlatList data={todos} renderItem={({item}) => (
          <ItemList item={item} pressHandler={pressHandler}/>
        )}/>
      </View>
      </View>
    </View>
  );
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  }
})