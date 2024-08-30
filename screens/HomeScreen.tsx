import React from 'react';
import {StatusBar} from 'expo-status-bar';
import {Button, StyleSheet, Text, View} from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Button title="UP" onPress={() => {}} />
      <Text>0</Text>
      <Button title="DOWN" onPress={() => {}} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
