import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
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
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [total, setTotal] = useState(0);
  const [gigs, setGigs] = useState([
    {
      description: 'Freelance Job',
      amount: 499.99
    }
  ]);

  useEffect(() => {
  setTotal( gigs.reduce((total, gigs) => total+Number(gigs.amount), 0));

  }, [gigs])

  const addGig = () => {
    setGigs([...gigs, {
      description: description,
      amount: amount
    }]);
    setDescription('');
    setAmount('');
  }

  return (
    <SafeAreaView >
      <View>
        <Text style={styles.titleText}>Tracker Income</Text>
      </View>
      <Text>Total Income: ${total}</Text>
      <TextInput 
        style={styles.input}
        value={description}
        placeholder='Enter a description'
        onChangeText={text => setDescription(text)}
      />

      <TextInput 
        style={styles.input}
        value={amount}
        placeholder="Enter a amount"
        keyboardType= 'numeric'
        onChangeText={text => setAmount(text)}
      />
      <Button 
        title='Add Job' 
        onPress={addGig} 
        disabled={!amount && !description}
      />

      {gigs.map(gig => (
        <View>
          <Text>{gig.description}</Text>
          <Text>{gig.amount}</Text>
        </View>
      ))}

      <View>
        <LineChart
          data={{
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100
                ]
              }
            ]
          }}
          width={Dimensions.get("window").width} // from react-native
          height={220}
          yAxisLabel="$"
          yAxisSuffix="k"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "#e26a00",
            backgroundGradientFrom: "#fb8c00",
            backgroundGradientTo: "#ffa726",
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16
            },
            propsForDots: {
              r: "6",
              strokeWidth: "2",
              stroke: "#ffa726"
            }
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16
          }}
        />
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
    paddingRight: 20
  },
  input: {
    height: 40,
    borderColor: 'red',
    borderWidth: 1,
    margin: 20,
    marginTop: 10,
  }
});

const chartConfig = {
  backgroundGradientFrom: "#1E2923",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#08130D",
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false // optional
};

export default App;
