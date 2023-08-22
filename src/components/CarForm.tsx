import React, {Dispatch, FC, PropsWithChildren} from 'react';

import {SubmitHandler, useForm} from "react-hook-form";
import {ICar} from "../interfaces";
import {carsService} from "../services";

interface IProps extends PropsWithChildren {
    setTrigger: Dispatch<React.SetStateAction<boolean>>,
    setCarForUpdate: Dispatch<React.SetStateAction<ICar>>,
    carForUpdate: ICar
}

const CarForm: FC<IProps> = ({setTrigger,carForUpdate,setCarForUpdate}) => {
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
         await carsService.create(car);
         setTrigger(prev => !prev);
         reset();
    }

    const update:SubmitHandler<ICar> = async (car) => {
        await carsService.updateById(carForUpdate.id, car);
        setTrigger(prev => !prev);
        setCarForUpdate(null);
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