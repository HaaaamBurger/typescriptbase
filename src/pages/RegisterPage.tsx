import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {IAuth} from "../interfaces/authInterface";

const RegisterPage = () => {
    const {
        register,
        reset,
        handleSubmit
    } = useForm<IAuth>();

    const registerUser:SubmitHandler<IAuth> = async (user) => {

    }

    return (
        <form onSubmit={handleSubmit(registerUser)}>
            <input type="text" placeholder={'password'} {...register('password')}/>
            <input type="text" placeholder={'username'} {...register('username')}/>
            <button>Register</button>
        </form>
    );
};

export {
    RegisterPage,
};