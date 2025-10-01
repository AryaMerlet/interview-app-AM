import React from 'react';
import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import CustomButton from '../components/CustomButton';
// import actions from the slice
import {decrement, increment} from '../store/feature/counter/counterSlice';
// import useSelector and useDispatch hooks from react-redux
import {useSelector, useDispatch} from 'react-redux';

export default function HomeScreen() {
  //get state from the store, state = entire store (state:any), counter = key defined in index.ts, property from the CounterState interface
  const counter = useSelector((state: any) => state.counter.value);
  //dispatch actions to the store
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <CustomButton
        title="UP"
        //dispatch increment action on button press
        onPress={() => {
          dispatch(increment());
        }}
      />
      {/* display the counter value from the state */}
      <Text style={styles.counter}>{counter}</Text>
      <CustomButton
        title="DOWN"
        //dispatch decrement action on button press
        onPress={() => {
          dispatch(decrement());
        }}
      />
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
