import { createSlice } from "@reduxjs/toolkit";

const URL = " https://ecom-midaz-ms-95.herokuapp.com/user/update"

const ORDER_URL = " https://ecom-midaz-ms-95.herokuapp.com/user/order"

const CART_URL = " https://ecom-midaz-ms-95.herokuapp.com/cart"

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
            const cartData = {
                "products": [],
                "user": state.user?._id
            }
            fetch(CART_URL, {
                method: "PUT",
                headers: {
                    "Content-Type": "Application/json"
                },
                body: JSON.stringify(cartData),
            }).then(res => res.json())
        },
        mergeCart: (state, action) => {
            console.log("MERGED_IN :: ", JSON.stringify(state.cart), JSON.stringify(action.payload));
            const result = Object.values([...state.cart, ...action.payload].reduce((acc, { productId, quantity, name, price, img, id, size }) => {
                acc[productId] = {
                    productId,
                    quantity: (acc[productId] ? acc[productId].quantity : 0) + quantity,
                    name,
                    price,
                    img,
                    id,
                    size
                };
                return acc;
            }, {}));
            console.log("MERGED_RESULT :: ", result);
            state.cart = result;
        },
        clearStateForLogout: (state, action) => {
            state.cart = [];
            state.user = {};
            state.order = {};
        }
    }
})

export const { addItem, removeItem, increment, decrement, setUser, updateUser, removeUser, setCart, setOrder, clearCart, mergeCart, clearStateForLogout } = mainReducer.actions

export default mainReducer.reducer