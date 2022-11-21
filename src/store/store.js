import { configureStore } from "@reduxjs/toolkit";
import colorReducer from '../features/color';

const store = configureStore({
    reducer: {
        color: colorReducer
    },
})

export default store;

