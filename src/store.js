import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./modules/slices/userSlice";

export const store=configureStore({
    reducer:{
        user:userReducer
    }
})