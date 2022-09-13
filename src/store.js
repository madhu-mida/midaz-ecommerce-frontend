import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "./reducer/mainReducer";
import { loadState, saveState } from './localStorage';

const persistedState = loadState();
const store = configureStore({
    reducer: {
        main: mainReducer,
    },
    preloadedState: persistedState
});

store.subscribe(
    () => {
        saveState(store.getState());
    }
);

export default store;