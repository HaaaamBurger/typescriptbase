import React, {FC, PropsWithChildren, useEffect, useState} from 'react';

import {useAppLocation} from "../hooks/routerHooks";
import {ICar} from "../interfaces";
import {useParams} from "react-router-dom";
import {carsService} from "../services";
import {CarDetails} from "../components";



const CarDetailsPage = () => {
    const {state} = useAppLocation<ICar>();
    const {id} = useParams<{id: string}>();

    const [car, setCar] = useState<ICar>(null)
    useEffect(() => {
        if (state) {
            setCar(state)
        } else {
            carsService.getById(+id)
        }
    },[id,state])
    return (
        <div>
            {car && <CarDetails car={car}/>}
        </div>
    );
};

export {
    CarDetailsPage,
};