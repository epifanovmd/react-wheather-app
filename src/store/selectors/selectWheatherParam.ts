import { IAppState } from "../index";

export const selectWheatherMain = (state: IAppState): any => {
    if (state.wheatherState.wheather) {
        return state.wheatherState.wheather.main;
    }
};
export const selectWheatherWind = (state: IAppState): any => {
    if (state.wheatherState.wheather) {
        return state.wheatherState.wheather.wind;
    }
};

export const selectWheatherClouds = (state: IAppState): any => {
    if (state.wheatherState.wheather) {
        return state.wheatherState.wheather.clouds;
    }
};

export const selectWheatherSys = (state: IAppState): any => {
    if (state.wheatherState.wheather) {
        return state.wheatherState.wheather.sys;
    }
};

export const selectWheatherName = (state: IAppState): any => {
    if (state.wheatherState.wheather) {
        return state.wheatherState.wheather.name;
    }
};
