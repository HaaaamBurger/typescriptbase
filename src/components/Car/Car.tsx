import React, {FC, PropsWithChildren} from 'react';
import {ICar} from "../../interfaces";
import {useAppDisptach, useAppSelector} from "../../reduxHooks";
import {carsAction} from "../../redux";

interface IProps extends PropsWithChildren{
    car: ICar
}
const Car:FC<IProps> = ({car}) => {
    const {year,id,price,brand} = car;
    const dispatch = useAppDisptach();

    return (
        <div style={{margin: '15px'}}>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <button onClick={() => dispatch(carsAction.deleteCar({id}))}>Delete</button>
            <button onClick={() => dispatch(carsAction.setCarForUpdate({car}))}>Update</button>
        </div>
    );
};

export {
    Car,
};