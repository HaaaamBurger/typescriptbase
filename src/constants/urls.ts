const baseURL = process.env.REACT_APP_API;

const urls = {
    base: {
        cars: '/cars',
        byId: (id: number):string => `/cars/${id}`
    }
}

export {urls,baseURL}