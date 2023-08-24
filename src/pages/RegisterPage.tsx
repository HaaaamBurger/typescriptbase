import React from 'react';

import {SubmitHandler, useForm} from "react-hook-form";
import {IAuth} from "../interfaces";
import {useAppDispatch, useAppSelector} from "../hooks/reduxHooks";
import {authActions} from "../redux/slice/authSlice";
import {useNavigate} from "react-router-dom";

const RegisterPage = () => {
    const {
        register,
        reset,
        handleSubmit
    } = useForm<IAuth>();

    const dispatch = useAppDispatch();
    const {errors} = useAppSelector(state => state.auth);
    const navigate = useNavigate();

    const registerUser:SubmitHandler<IAuth> = async (user) => {
        const {meta: {requestStatus}} = await dispatch(authActions.register({user}));

        if (requestStatus === 'fulfilled') {
            reset();
            navigate('/login');
        } else {
            console.log(requestStatus)
        }
    }

    return (
        <form onSubmit={handleSubmit(registerUser)}>
            <input type="text" placeholder={'username'} {...register('username')}/>
            <input type="text" placeholder={'password'} {...register('password')}/>
            <button>Register</button>
            {errors && <span>username already exists</span>}
        </form>
    );
};

export {
    RegisterPage,
};