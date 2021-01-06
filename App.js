import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Button } from 'react-native';
import Todo from './Todo'

export default function App() {
  const [input, setInput] = useState('');
  const [todo, setTodo] = useState([]);

  const addTodo = () => {
    setTodo([input, ...todo]);
    setInput('')
  }

  return (
    <SafeAreaView >
      <View style={{
        marginTop: 40,
        width: 50,
        height: 50,
        backgroundColor: 'orange',
        borderRadius: 90
      }}/>
      {todo.map(obj => <Todo key={obj.id} title={obj}/>)}
      <TextInput
      value={input}
      onChangeText={text => setInput(text)}
        style={styles.todoInput}
      />
      <Button onPress={addTodo} title='Add to list' color='red'/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  todoInput: {
    margin: 20,
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 90
  }
});
