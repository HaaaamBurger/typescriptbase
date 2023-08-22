import React, {Dispatch, FC, PropsWithChildren} from 'react';

import {ICar} from "../interfaces";
import {carsService} from "../services";
import {useNavigate} from "react-router-dom";

interface IProps extends PropsWithChildren{
    car: ICar,
    setCarForUpdate: Dispatch<React.SetStateAction<ICar>>,
    setTrigger: Dispatch<React.SetStateAction<boolean>>
}
const Car:FC<IProps> = ({car,setCarForUpdate,setTrigger}) => {
    const {id,brand} = car;

    const navigate = useNavigate();

    const handleDelete = async () => {
        await carsService.deleteById(id);
        setTrigger(prevState => !prevState);
    }

    return (
        <div style={{margin: '15px'}}>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <button onClick={handleDelete}>Delete</button>
            <button onClick={() => setCarForUpdate(car)}>Update</button>
            <button onClick={() => navigate(id.toString(), {state: car})}>Details</button>
        </div>
    );
};

export {
    Car,
};