import React, {Dispatch, FC, PropsWithChildren, useEffect} from 'react';
import {Car} from "./Car";
import {useAppDispatch, useAppSelector} from "../hooks/reduxHooks";
import {carActions} from "../redux/slice/carSlice";

interface IProps extends PropsWithChildren{

}
const Cars:FC<IProps> = () => {
    const dispatch = useAppDispatch();
    const {cars} = useAppSelector(state => state.cars)

    useEffect(() => {
        dispatch(carActions.getAll())
    }, []);

    return (
        <div>
            {cars.map(car => <Car car={car} key={car.id}/>)}
        </div>
    );
};

export {
    Cars,
};