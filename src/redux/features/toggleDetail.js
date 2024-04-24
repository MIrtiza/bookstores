import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isPopupEnable: false,
    id: -1,
    title: "",
    author: "",
    price:"",
    bookUrl:""
}
 




export const toggleSlice = createSlice({
    name: "toggleDetail",
    initialState,
    reducers:{
        open: (state, action)=>{
            state.isPopupEnable = true;
            state.id = action.payload.id;
            state.title = action.payload.title;
            state.author = action.payload.author;
            state.price = action.payload.price;
            state.bookUrl = action.payload.bookUrl;
        },
        close: (state)=>{
            state.isPopupEnable = false;
            state.id = -1;
            state.title = "";
            state.author = "";
            state.price = "";
            state.bookUrl = "";
        }
    }
})


// Action creators are generated for each case reducer function
export const { open, close } = toggleSlice.actions

export default toggleSlice.reducer