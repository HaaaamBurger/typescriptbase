import React from 'react';
import {CarForm, Cars} from "../components";

import {Outlet} from "react-router-dom";

const CarsPage = () => {


    return (
        <div>
            <Outlet/>
            <CarForm/>
            <Cars/>
        </div>
    );
};

export {
    CarsPage,
};