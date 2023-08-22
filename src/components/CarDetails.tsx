import React, {FC, PropsWithChildren} from 'react';
import {ICar} from "../interfaces";



interface IProps extends PropsWithChildren{
    car: ICar
}

const CarDetails:FC<IProps> = ({car: {price,brand,year,id}}) => {

    return (
        <div>
            <div>{id}) {brand}--{price}--{year}</div>
        </div>
    );
};

export {
    CarDetails,
};