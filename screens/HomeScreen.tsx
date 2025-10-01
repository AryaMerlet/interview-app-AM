import React from 'react';
import {StatusBar} from 'expo-status-bar';
import {Button, StyleSheet, Text, View} from 'react-native';
import CustomButton from '../components/CustomButton';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <CustomButton title="UP" onPress={() => {}} />
      <Text style={styles.counter}>0</Text>
      <CustomButton title="DOWN" onPress={() => {}} />
      <StatusBar style="auto" />
    </View>
  );
}

//StyleSheet.create = create a new stylesheet as an object, for performance optimization and better debugging
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  counter: {
    fontSize: 36,
    fontWeight: 'bold',
    margin: 10,
  },
});
