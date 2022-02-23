import { createSlice, PayloadAction } from '@reduxjs/toolkit'; 
import type { RootState } from '../store';

export type CounterState = {
    value: number;
};
const initialState: CounterState = {
    value: 0,
};

const counterSlice = createSlice({ 
    name: 'counter', 
    initialState, 
    reducers: { 
        increment: state => { state.value += 1 }, 
        decrement: state => { state.value -= 1 }, 
    }, 
}); 

function newFunction(): { increment: any; decrement: any; } {
    return counterSlice.actions;
}
export default counterSlice.reducer; // 리듀서
