import React, {Dispatch, FC, PropsWithChildren} from 'react';

import {ICar} from "../interfaces";
import {Car} from "./Car";

interface IProps extends PropsWithChildren{
    cars: ICar[],
    setCarForUpdate: Dispatch<React.SetStateAction<ICar>>,
    setTrigger: Dispatch<React.SetStateAction<boolean>>
}
const Cars:FC<IProps> = ({cars,setCarForUpdate,setTrigger}) => {

    return (
        <div>
            {cars.map(car => <Car car={car} key={car.id} setCarForUpdate={setCarForUpdate} setTrigger={setTrigger}/>)}
        </div>
    );
};

export {
    Cars,
};