import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  Dimensions,
  TextInput,
  Button,
  SafeAreaView
 } from 'react-native';
import {
  BarChart,
  LineChart
} from "react-native-chart-kit";
import Todo from './Todo';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.titleText}>Tracker Income</Text>
      </View>
      <View>
        <Todo title='Lets go!' />
        <Todo title='Lets go!' />
        <Todo title='Lets go!' />
      </View>
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
  }
});

export default App;
