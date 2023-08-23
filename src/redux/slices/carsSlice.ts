import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {ICar} from "../../interfaces";
import {AxiosError} from "axios";
import {carsService} from "../../services";

interface IState{
    cars:ICar[]
}

const initialState:IState = {
    cars: []
}

const getAll = createAsyncThunk<ICar[], void>(
    'carsSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await carsService.getAll();
            return data
        }catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response.data)
        }
    }
)

const carsSlice = createSlice({
    name: 'carsSlice',
    initialState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(getAll.fulfilled, (state, action) => {
            state.cars = action.payload;
        })
})

const {reducer: carsReducer,actions} = carsSlice;

const carsAction = {
    ...actions,
    getAll
}

export {carsAction,carsReducer};