import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {}

const initialState: CounterState = {}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {},
})

// Action creators are generated for each case reducer function
export const {} = counterSlice.actions

export default counterSlice.reducer