const baseURL = 'http://owu.linkpc.net/carsAPI/v1';

const urls = {
    cars: {
        base: '/cars',
        byId: (id: number):string => `/cars/${id}`
    }
}

export {urls,baseURL}