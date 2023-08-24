import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ICar} from "../../interfaces";
import {carsService} from "../../services";
import {AxiosError} from "axios";
import {IPagination} from "../../interfaces/paginationInterface";

interface IState {
    cars:ICar[],
    carForUpdate: ICar
}

const initialState:IState = {
    cars: [],
    carForUpdate: null
};

const getAll = createAsyncThunk<IPagination<ICar>, void>(
    'carSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await carsService.getAll();
            return data;
        }catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response.data);
        }
    }
)

const create = createAsyncThunk<void, {car: ICar}>(
    'carSlice/create',
    async ({car}, {rejectWithValue,dispatch}) => {
        try {
            await carsService.create(car);
            await dispatch(getAll());
        }catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response.data);
        }
    }
)

const deleteCar = createAsyncThunk<void, {id: number}>(
    'carSlice/deleteCar',
    async ({id}, {dispatch,rejectWithValue}) => {
        try {
            await carsService.deleteById(id);
            await dispatch(getAll());
        }catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response.data);
        }
    }
)

const update = createAsyncThunk<void, {id: number, car: ICar}>(
    'carSlice/update',
    async ({id,car}, {rejectWithValue,dispatch}) => {
        try {
            await carsService.updateById(id,car);
            await dispatch(getAll())
        }catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response.data);
        }
    }
)

const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {
        setCarForUpdate: (state, action: PayloadAction<{car: ICar}>) => {
            state.carForUpdate = action.payload.car
        }
    },
    extraReducers: builder => builder
        .addCase(getAll.fulfilled, (state, action) => {
            state.cars = action.payload.items;
        })
        .addCase(update.fulfilled, (state) => {
            state.carForUpdate = null;
        })

})

const {reducer: carReducer,actions} = carSlice;

const carActions = {
    ...actions,
    getAll,
    create,
    update,
    deleteCar
}

export {carActions,carReducer};