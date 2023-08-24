import {createAsyncThunk, createSlice, isFulfilled, isRejected} from "@reduxjs/toolkit";
import {IAuth} from "../../interfaces";
import {AxiosError} from "axios";
import {authService} from "../../services/authService";

interface IState{
    errors: {
        username?: string[]
    }
}

const initialState:IState = {
    errors: null
}

const register = createAsyncThunk<void, { user: IAuth }>(
    'authSlice/register',
    async ({user}, {rejectWithValue}) => {
        try {
            await authService.register(user);
        }catch (e){
            const err = e as AxiosError;
            return rejectWithValue(err.response.data);
        }
    }
)

const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {},
    extraReducers: builder => builder
        .addMatcher(isRejected(), (state, action) => {
            state.errors = action.payload;
        })
        .addMatcher(isFulfilled(), (state) => {
            state.errors = null;
        })
})

const {reducer: authReducer,actions} = authSlice;

const authActions = {
    ...actions,
    register
}

export {authActions,authReducer}