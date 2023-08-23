import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {ICar} from "../../interfaces";
import {useAppDisptach, useAppSelector} from "../../reduxHooks";
import {carsAction} from "../../redux";

const CarsForm = () => {

    const {setCarForUpdate} = useAppSelector(state => state.cars)
    const dispatch = useAppDisptach();

    const {
        setValue,
        register,
        reset,
        handleSubmit
    } = useForm<ICar>();

    if (setCarForUpdate) {
        setValue('brand', setCarForUpdate.brand);
        setValue('price', setCarForUpdate.price)
        setValue('year', setCarForUpdate.year)
    }

    const save: SubmitHandler<ICar> = async (car) => {
        await dispatch(carsAction.create({car}))
        reset();
    }

    const update: SubmitHandler<ICar> = async (car) => {
        await dispatch(carsAction.update({id: setCarForUpdate.id, car}));
        reset();
    }

    return (
        <form onSubmit={handleSubmit(!setCarForUpdate ? save : update)}>
            <input type="text" placeholder={'brand'} {...register('brand')}/>
            <input type="text" placeholder={'price'} {...register('price')}/>
            <input type="text" placeholder={'year'} {...register('year')}/>
            <button>{!setCarForUpdate ? 'Create' : 'Update'}</button>
        </form>
    );
};

export {
    CarsForm,
};