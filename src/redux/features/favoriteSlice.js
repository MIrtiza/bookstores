import { createSlice } from '@reduxjs/toolkit'

if (typeof window !== 'undefined') {
    // Perform localStorage action
    var localStorageItem = localStorage.getItem("favItems") ? JSON.parse(localStorage.getItem("favItems")) : []
}
const initialState = {
    favoriteItems: localStorageItem,

}
const favoriteSlice = createSlice({
    name: 'favorite',
    initialState,
    reducers: {
        addFavorite(state, action) {
            const existItem = state.favoriteItems?.findIndex(item => item.id === action.payload.id);
            if (existItem >= 0) {
                console.log("already in save list")
                const filteredItem = state.favoriteItems?.filter((item) => item.id !== action.payload.id)
                state.favoriteItems = filteredItem;
                
                localStorage.setItem("favItems", JSON.stringify(state.favoriteItems))
                
            } else {
                const newFavorite = { ...action.payload, saveItem: true }
                state.favoriteItems.push(newFavorite);


                localStorage.setItem("favItems", JSON.stringify(state.favoriteItems))
            }

        },
        // removeFavorite(state,action){
        //     let filteredItem = state.favoriteItems?.filter((item)=>item.id !== action.payload.id)
        //     state.favoriteItems = filteredItem;

        //     localStorage.setItem("favItems", JSON.stringify(state.favoriteItems))
        // },
        // clearFavorite(state,action){
        //     state.favoriteItems = [];
        //     localStorage.setItem("favItems", JSON.stringify(state.favoriteItems))
        // },

        favouriteList(state, action) {

            // state.favoriteItems?.push((action.payload)?.filter((item)=>item.save == true));

            // localStorage.setItem("favItems", JSON.stringify((action.payload)?.filter((item)=>item.save == true)))

        }

    }
})

export const { favouriteList, addFavorite } = favoriteSlice.actions;

export default favoriteSlice.reducer;