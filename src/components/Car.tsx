import React, {FC, PropsWithChildren} from 'react';
import {ICar} from "../interfaces";

interface IProps extends PropsWithChildren{
    car: ICar
}
const Car:FC<IProps> = ({car:{id,brand}}) => {
    return (
        <div style={{margin: '15px'}}>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
        </div>
    );
};

export {
    Car,
};