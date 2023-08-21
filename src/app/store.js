import { configureStore } from "@reduxjs/toolkit";
import amountSliceReducer from '../features/counter/amountSlice';
import postsSliceReducer from '../features/posts/postsSlice'
import userSliceReducer from "../features/users/userSlice";

export const store = configureStore({
    reducer: {
        amountt: amountSliceReducer,
        posts:postsSliceReducer,
        users:userSliceReducer,
    }
})