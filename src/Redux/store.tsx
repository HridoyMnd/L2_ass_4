import { configureStore } from "@reduxjs/toolkit";
import { baseAPI } from "./Api/baseapi";

export const store = configureStore({
    reducer:{
        [baseAPI.reducerPath]:baseAPI.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseAPI.middleware),
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;