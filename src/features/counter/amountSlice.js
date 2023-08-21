import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    amount:0
}

export const amountSlice = createSlice({
    name:'amountss',
    initialState,
    reducers:{
        deposit:(state)=> {
            state.amount = state.amount + 1;
        },
        withdraw: (state) => {
            state.amount = state.amount - 1;
        },
        reset: (state) => {
            state.amount = 0;
        },
        depositbyInput: (state, action)=> {
            state.amount = state.amount + action.payload
        }

    }
})

export const {deposit, withdraw,reset,depositbyInput} = amountSlice.actions;
export default amountSlice.reducer;