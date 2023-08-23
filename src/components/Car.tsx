import React, {FC, PropsWithChildren} from 'react';

import {ICar} from "../interfaces";
import {useNavigate} from "react-router-dom";
import {useAppDispatch} from "../hooks/reduxHooks";
import {carActions} from "../redux/slice/carSlice";

interface IProps extends PropsWithChildren{
    car: ICar,
}
const Car:FC<IProps> = ({car}) => {
    const {id,brand} = car;

    const dispatch = useAppDispatch();

    const navigate = useNavigate();

    const handleDelete = async () => {
        dispatch(carActions.deleteCar({id}))
    }

    return (
        <div style={{margin: '15px'}}>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <button onClick={handleDelete}>Delete</button>
            <button onClick={() => dispatch(carActions.setCarForUpdate({car}))}>Update</button>
            <button onClick={() => navigate(id.toString(), {state: car})}>Details</button>
        </div>
    );
};

export {
    Car,
};