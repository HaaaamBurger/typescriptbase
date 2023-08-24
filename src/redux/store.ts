import {configureStore} from "@reduxjs/toolkit";
import {carReducer} from "./slice/carSlice";
import {authReducer} from "./slice/authSlice";

const store = configureStore({
    reducer: {
        cars: carReducer,
        auth: authReducer
    }
})

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export type {
    RootState,
    AppDispatch
}
export {store}