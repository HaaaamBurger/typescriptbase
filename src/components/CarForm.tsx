import React, {FC, PropsWithChildren} from 'react';

import {SubmitHandler, useForm} from "react-hook-form";
import {ICar} from "../interfaces";
import {useAppDispatch, useAppSelector} from "../hooks/reduxHooks";
import {carActions} from "../redux/slice/carSlice";

interface IProps extends PropsWithChildren {

}

const CarForm: FC<IProps> = () => {

    const {carForUpdate} = useAppSelector(state => state.cars);
    const dispatch = useAppDispatch();

    const {
        register,
        reset,
        handleSubmit,
        setValue
    } = useForm<ICar>()

    if (carForUpdate) {
        setValue('brand', carForUpdate.brand);
        setValue('price', carForUpdate.price);
        setValue('year', carForUpdate.year);
    }

    const save:SubmitHandler<ICar> = async (car) => {
         dispatch(carActions.create({car}))
         reset();
    }

    const update:SubmitHandler<ICar> = async (car) => {
        dispatch(carActions.update({id: carForUpdate.id, car}))
        reset();
    }
    return (
        <form onSubmit={handleSubmit(!carForUpdate ? save : update)}>
            <input type="text" placeholder={'brand'} {...register('brand')}/>
            <input type="text" placeholder={'price'} {...register('price')}/>
            <input type="text" placeholder={'year'} {...register('year')}/>
            <button>{!carForUpdate ? 'create' : 'update'}</button>
        </form>
    );
};

export {
    CarForm,
};