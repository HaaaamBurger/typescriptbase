import {apiService, IRes} from "./apiService";
import {urls} from "../constants";
import {ICar} from "../interfaces";

const carsService = {
    getAll: (): IRes<ICar[]> => apiService.get(urls.cars),
    create: (car: ICar): IRes<ICar> => apiService.post(urls.cars, car),
    updateById: (id: number, car: ICar) => apiService.put(`${urls.cars}/${id}`,car),
    deleteById: (id: number): IRes<void> => apiService.delete(`${urls.cars}/${id}`)
}

export {carsService};