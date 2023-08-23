import React from 'react';
import {Cars, CarsForm} from "../components";

const MainLayout = () => {
    return (
        <div>
            <CarsForm/>
            <hr/>
            <Cars/>
        </div>
    );
};

export {
    MainLayout,
};