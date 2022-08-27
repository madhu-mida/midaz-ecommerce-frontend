import { createSlice } from "@reduxjs/toolkit";

const URL = "http://localhost:4000/user/update"

const ORDER_URL = "http://localhost:4000/user/order"

const initialState = {
    cart: [],
    user: {},
    order: {},
}

export const mainReducer = createSlice({
    name: 'main',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const existingItem = state.cart.find((element) => {
                if (element.productId === action.payload.productId && element.size === action.payload.size) {
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
        setCart: (state, action) => {
            state.cart = action.payload;
        },
        setUser: (state, action) => {
            state.user = action.payload
            console.log("action.payload", action.payload);
        },
        updateUser: (state, action) => {
            state.user = action.payload
            fetch(URL, {
                method: "PUT",
                headers: {
                    "Content-Type": "Application/json"
                },
                body: JSON.stringify(action.payload),
            }).then(res => res.json())

        },
        removeUser: (state, action) => {
            state.user = {}
            state.cart = []
        },
        setOrder: (state, action) => {
            state.order = action.payload
            fetch(ORDER_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "Application/json"
                },
                body: JSON.stringify(action.payload),
            }).then(res => res.json())
        },
        clearCart: (state, action) => {
            state.cart = []
        },
    }
})

export const { addItem, removeItem, increment, decrement, setUser, updateUser, removeUser, setCart, setOrder, clearCart } = mainReducer.actions

export default mainReducer.reducer