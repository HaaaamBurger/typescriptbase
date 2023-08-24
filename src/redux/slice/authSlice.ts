import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IAuth} from "../../interfaces/authInterface";
import {AxiosError} from "axios";
import {authService} from "../../services/authService";

interface IState {
    errors:{
        username?: string[]
    }
}

let initialState: IState = {
    errors: null
}

const register = createAsyncThunk<void, {user: IAuth}>(
    'authSlice/register',
    async ({user}, {rejectWithValue}) => {
        try {
            await authService.register(user);
        }catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response.data)
        }
    }
)

const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {},
    extraReducers: {}
})

const {reducer: authReducer,actions} = authSlice;

const authActions = {
    ...actions,
    register
}

export {
    authActions,
    authReducer
}