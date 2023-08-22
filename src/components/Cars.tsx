import React, {FC, PropsWithChildren, useEffect, useState} from 'react';
import {ICar} from "../interfaces";
import {carsService} from "../services";
import {Car} from "./Car";

interface IProps extends PropsWithChildren{

}
const Cars:FC<IProps> = () => {
    const [cars, setCars] = useState<ICar[]>([]);

    useEffect(() => {
        carsService.getAll().then(({data}) => setCars(data));
    })

    return (
        <div>
            {cars.map(car => <Car car={car} key={car.id}/>)}
        </div>
    );
};

export {
    Cars,
};