import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import TodoItem from './components/TodoItem';
import TodoInput from './components/TodoInput';

export default function App() {

  
  const [todolist, setTodoList] = useState([]);


  function addTodoText(enteredTodoText) {
      if (enteredTodoText !== '') {    
        setTodoList([...todolist, {text : enteredTodoText,id : Math.random().toLocaleString()}]);
      }
  }

  function deleteHandler(id) {
    setTodoList(todolist.filter((todo) => todo.id != id))
  }

  return (
    <View style={styles.container}>
        <TodoInput onTodoAdded={addTodoText}/>
      <FlatList style={styles.todolist} data={todolist} renderItem={(todoItem) => <TodoItem todoId={todoItem.item.id} onDelete={deleteHandler} text={todoItem.item.text}/>} keyExtractor={(item,index) => {
        return (
          item.id
        )
      }}>
      </FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 10
  },
  todolist: {
    height: '83%',
  },
  todo: {
    fontSize: 20,
    textAlign: 'center',
    borderWidth: 1,
    marginBottom: 10,
    borderColor: '#cccccc',
    backgroundColor: '#FF0079FF',
    color: 'white',
    padding: 10,
    borderRadius:200,
    fontSize : 20
  }
});


