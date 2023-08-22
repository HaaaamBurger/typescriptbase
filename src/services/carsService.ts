import {apiService, IRes} from "./apiService";
import {ICar} from "../interfaces/carInterface";
import {urls} from "../constants";

const carsService = {
    getAll: (): IRes<ICar[]> => apiService.get(urls.base.cars),
    getById: (id: number): IRes<ICar> => apiService.get(urls.base.byId(id)),
    deleteById: (id: number): IRes<void> => apiService.delete(urls.base.byId(id)),
    updateById: (id: number, car: ICar): IRes<ICar> => apiService.put(urls.base.byId(id), car),
    create: (data: ICar): IRes<ICar> => apiService.post(urls.base.cars, data)
}