import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

export interface CounterState {
  //declare value as a number which will hold the state of the counter
  value: number;
}

const initialState: CounterState = {
  //set initial state of the counter to 0
  value: 0,
};

export const counterSlice = createSlice({
  //name of the slice
  name: 'sliceCounter',
  //call of const initialState
  initialState,
  //reducers = actions to change the state
  reducers: {
    //name of the action = increment and state = current state
    increment: state => {
      state.value += 1;
    },
    //name of the action = decrement and state = current state
    decrement: state => {
      state.value -= 1;
    },
  },
});

// Action creators are generated for each case reducer function
//export increment and decrement functions to be used in the component and call counterSlice with its action
export const {increment, decrement} = counterSlice.actions;

export default counterSlice.reducer;
