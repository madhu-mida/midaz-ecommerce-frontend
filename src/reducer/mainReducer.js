import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: []
}

export const mainReducer = createSlice({
    name: 'main',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const existingItem = state.cart.find((element) => {
                if (element.productId === action.payload.productId) {
                    return true
                }
            })
            if (existingItem) {
                // find the item (obj) from the cart
                // increment the quantity of the item by 1
                existingItem.quantity += 1
            } else {
                action.payload.quantity = 1;
                state.cart.push(action.payload);
            }

        },
        removeItem: (state, action) => {
            //remove action.payload from state.cart
            let removeIndex = state.cart.indexOf(action.payload)
            state.cart.splice(removeIndex, 1)

        },
        increment: (state, action) => {
            const existingItem = state.cart.find((element) => {
                if (element.productId === action.payload.productId) {
                    return true
                }
            })
            if (existingItem) {
                // find the item (obj) from the cart
                // increment the quantity of the item by 1
                existingItem.quantity += 1
            }
        },
        decrement: (state, action) => {
            const existingItem = state.cart.find((element) => {
                if (element.productId === action.payload.productId) {
                    return true
                }
            })
            if (existingItem) {
                // find the item (obj) from the cart
                // increment the quantity of the item by 1
                existingItem.quantity -= 1
            }
        },
    }
})

export const { addItem, removeItem, increment, decrement } = mainReducer.actions

export default mainReducer.reducer