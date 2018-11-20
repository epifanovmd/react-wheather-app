import { baseFetch } from "./baseFetch";
// tslint:disable
export const fetchWheather = async (city: string) => {
    return await baseFetch(city);
};
