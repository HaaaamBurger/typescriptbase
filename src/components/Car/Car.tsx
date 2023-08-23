import React, {FC, PropsWithChildren} from 'react';
import {ICar} from "../../interfaces";

interface IProps extends PropsWithChildren{
    car: ICar
}
const Car:FC<IProps> = ({car}) => {
    const {year,id,price,brand} = car;

    return (
        <div style={{margin: '15px'}}>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <button>Delete</button>
            <button>Update</button>
        </div>
    );
};

export {
    Car,
};