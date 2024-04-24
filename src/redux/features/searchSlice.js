import { createSlice } from '@reduxjs/toolkit';

const initialState ={
    searchValue: '',
    rangeSearchVal: [],
    categorySearchVal: {}
}

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers:{
        searchData(state, action){
            console.log(action.payload)
            state.searchValue = action.payload
        },
        rangeSearch(state,action){
            state.rangeSearchVal = action.payload
        },
        categorySearch(state, action){
            state.categorySearchVal = action.payload
        }
    }
})

export const { searchData,rangeSearch,categorySearch } = searchSlice.actions;

export default searchSlice.reducer