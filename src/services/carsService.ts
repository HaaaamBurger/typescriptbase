import {apiService, IRes} from "./apiService";
import {urls} from "../constants";
import {ICar} from "../interfaces";
import {IPagination} from "../interfaces/paginationInterface";

const carsService = {
    getAll: ():IRes<IPagination<ICar>> => apiService.get(urls.cars.base),
    getById: (id: number): IRes<ICar> => apiService.get(urls.cars.byId(id)),
    deleteById: (id: number): IRes<void> => apiService.delete(urls.cars.byId(id)),
    updateById: (id: number, car: ICar): IRes<ICar> => apiService.put(urls.cars.byId(id), car),
    create: (data: ICar): IRes<ICar> => apiService.post(urls.cars.base, data)
}

export {carsService};