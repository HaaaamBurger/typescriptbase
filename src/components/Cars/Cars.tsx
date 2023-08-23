import React, {useEffect} from 'react';

import {carsAction} from "../../redux";
import {Car} from "../Car";
import {useAppDisptach, useAppSelector} from "../../reduxHooks";

const Cars = () => {
    const dispatch = useAppDisptach();
    const {cars} = useAppSelector(state => state.cars);

    useEffect(() => {
        dispatch(carsAction.getAll());
    }, []);

    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export {
    Cars,
};