
import { useState } from 'react';
import {View,Button,StyleSheet,TextInput} from 'react-native'

const TodoInput = (props) => {
  const [enteredTodoText, setEnteredTodoText] = useState("");
  
  
  function enterTodoText(enterText) {
    setEnteredTodoText(enterText);
  }

  function onPress() {
    props.onTodoAdded(enteredTodoText)
    setEnteredTodoText("")
  }

  return (
    <View style={styles.flexForTodo}>
    <TextInput style={styles.TextInput} onChangeText={enterTodoText} value={enteredTodoText} placeholder='Add Your todo' />
    <Button title='Add todo' color={'#FF0079FF'} onPress={onPress} />
  </View>
  );
}

const styles = StyleSheet.create({
    flexForTodo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
        paddingBottom: 20,
        marginBottom: 20
      },
      TextInput: {
        borderWidth: 1,
        width: '75%',
        height: 50,
        padding: 5,
        fontSize:20,
        borderRadius : 200
      },
});

export default TodoInput;
