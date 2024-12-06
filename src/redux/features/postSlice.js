import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
    name:"post",
    initialState: {
        Posts: [],
    },
    reducers:{
        addpost: (state,action) => {
            state.Posts.push(action.payload)
        },

    }
})

export const {addpost} = postSlice.actions

export default postSlice.reducer


