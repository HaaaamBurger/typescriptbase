import React, {FC, PropsWithChildren} from 'react';

interface IProps extends PropsWithChildren{

}
const CarDetails:FC<IProps> = () => {
    return (
        <div>
            CarDetails
        </div>
    );
};

export {
    CarDetails,
};