import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ICar} from "../../interfaces";
import {AxiosError} from "axios";
import {carsService} from "../../services";

interface IState {
    cars: ICar[],
    setCarForUpdate: null | ICar
}

const initialState: IState = {
    cars: [],
    setCarForUpdate: null
}

const getAll = createAsyncThunk<ICar[], void>(
    'carsSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await carsService.getAll();
            return data
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response.data)
        }
    }
)

const create = createAsyncThunk<void, { car: ICar }>(
    'carsSlice/create',
    async ({car}, {rejectWithValue, dispatch}) => {
        try {
            await carsService.create(car);
            dispatch(getAll());
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response.data);
        }
    }
)

const deleteCar = createAsyncThunk<void, { id: number }>(
    'carsSlice/deleteCar',
    async ({id}, {rejectWithValue, dispatch}) => {
        try {
            await carsService.deleteById(id);
            dispatch(getAll());
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response.data);
        }
    }
)

const update = createAsyncThunk<void, { id: number, car: ICar }>(
    'carsSlice/update',
    async ({id, car}, {rejectWithValue, dispatch}) => {
        try {
            await carsService.updateById(id, car);
            dispatch(getAll());
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response.data);
        }
    }
)

const carsSlice = createSlice({
    name: 'carsSlice',
    initialState,
    reducers: {
        setCarForUpdate: (state, action: PayloadAction<{car: ICar}>) => {
            state.setCarForUpdate = action.payload.car;
        }
    },
    extraReducers: builder => builder
        .addCase(getAll.fulfilled, (state, action) => {
            state.cars = action.payload;
        })
        .addCase(update.fulfilled, (state) => {
            state.setCarForUpdate = null;
        })

})

const {reducer: carsReducer, actions} = carsSlice;

const carsAction = {
    ...actions,
    getAll,
    create,
    deleteCar,
    update
}

export {carsAction, carsReducer};