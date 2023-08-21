import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
    { id: '1', title: 'Learning Redux', content: "This is a content regarding learning of redux toolkit" },
    { id: '2', title: 'Learning React.......', content: "This is a content regarding learning of react with me" },
]

const postsSlice = createSlice({
    name:'posts',
    initialState,
    reducers:{
        // postAdded:(state, action) =>{
        //     state.push(action.payload)
        // },  
        
        postAdded:{
            reducer: (state, action) => {
                state.push(action.payload)
            },
            prepare: (title, content,userId) => {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content,
                        userId,
                    }
                }
            }
        }
        
    },
    
})

export const allposts = (state) => state.posts;

export const {postAdded} = postsSlice.actions;

export default postsSlice.reducer

