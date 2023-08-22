import React, {useEffect, useState} from 'react';
import {CarForm, Cars} from "../components";
import {ICar} from "../interfaces";
import {carsService} from "../services";
import {Outlet} from "react-router-dom";

const CarsPage = () => {
    const [cars, setCars] = useState<ICar[]>([]);
    const [trigger, setTrigger] = useState<boolean>(null);
    const [carForUpdate, setCarForUpdate] = useState<ICar>(null)

    useEffect(() => {
        carsService.getAll().then(({data}) => setCars(data));
    },[trigger]);

    return (
        <div>
            <Outlet/>
            <CarForm setTrigger={setTrigger} carForUpdate={carForUpdate} setCarForUpdate={setCarForUpdate}/>
            <Cars cars={cars} setCarForUpdate={setCarForUpdate} setTrigger={setTrigger}/>
        </div>
    );
};

export {
    CarsPage,
};