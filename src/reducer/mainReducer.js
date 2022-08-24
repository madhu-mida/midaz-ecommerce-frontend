import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: []
}

export const mainReducer = createSlice({
    name: 'main',
    initialState,
    reducers: {
        addItem: (state, action) => {
            state.cart.push(action.payload);
        },
        removeItem: (state, action) => {
            //remove action.payload from state.cart
        },
    }
})

export const { addItem, removeItem } = mainReducer.actions

export default mainReducer.reducer