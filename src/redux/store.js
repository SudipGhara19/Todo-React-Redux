
import { todoReducer } from "./todoReducer";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer:{
        todoReducer: todoReducer,
    }
})