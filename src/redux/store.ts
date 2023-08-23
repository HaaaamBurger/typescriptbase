import {configureStore} from "@reduxjs/toolkit";
import {carsReducer} from "./slices";

const store = configureStore({
    reducer: {
        cars: carsReducer
    }
})

type AppDispatch = typeof store.dispatch;
type RootState = ReturnType<typeof store.getState>

export type {
    AppDispatch,
    RootState
}

export {store};
