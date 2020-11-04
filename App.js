import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  Dimensions,
  TextInput,
  Button,
  SafeAreaView,
  ScrollView,
  ViewPager
 } from 'react-native';
import {
  BarChart,
  LineChart
} from "react-native-chart-kit";
import Todo from './Todo';

const App = () => {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    setTodos([input, ...todos])
    setInput('');
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.titleText}>Tracker Income</Text>
      </View>

      <ScrollView>
        {todos.map(todo => (
          <Todo title={todo} />
        ))}
      </ScrollView>

      <TextInput 
        style={styles.todoInput}
        value={input}
        onChangeText={text => setInput(text)}
      />
      <Button title='Add todo' onPress={addTodo} />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleText: {
    fontSize: 30,
    fontWeight: "bold",
  },
  container: {
    paddingTop: 50,
    paddingLeft: 20,
    paddingRight: 20
  },
  todoInput: {
    height: 40,
    borderColor: 'red',
    borderWidth: 1,
    margin: 20,
  }
});

export default App;
