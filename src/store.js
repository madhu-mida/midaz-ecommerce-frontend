import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "./reducer/mainReducer";

export const store = configureStore({
    reducer: {
        main: mainReducer,
    },
})
