import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: '0', name: 'Sarfaraz Malik' },
    { id: '1', name: 'Virat Kohli' },
    { id: '2', name: 'Ali Sethi' },
]

const userSlice = createSlice({
    name:'users',
    initialState,
    reducers:{

    }
})

export const selectallUsers = (state)=> state.users;

export default userSlice.reducer