import { connect } from "react-redux";
import { App } from "./index";
import { fetchWheatherData } from "../../store/asyncActions/fetchWheatherDataTyping";
import { IAppState } from "../../store";
import { ThunkDispatch } from "redux-thunk";
import { Action } from "redux";

import {
    selectWheatherClouds,
    selectWheatherMain,
    selectWheatherName,
    selectWheatherSys,
    selectWheatherWind,
} from "../../store/selectors/selectWheatherParam";

export interface IMapStateToAppProps {
    weatherMain: {
        "temp": number;
        "pressure": number;
        "humidity": number;
        "temp_min": number;
        "temp_max": number;
    };
    weatherWind: {
        "speed": number;
        "deg": number;
    };
    weatherClouds: {
        "all": number;
    };
    weatherSys: {"country": string };
    city: string;
}
export const mapStateToAppProps = (state: IAppState): IMapStateToAppProps =>
    ({
        weatherMain: selectWheatherMain(state),
        weatherWind: selectWheatherWind(state),
        weatherClouds: selectWheatherClouds(state),
        weatherSys: selectWheatherSys(state),
        city: selectWheatherName(state),
    });
type TOnGetWheather = (city: string) => void;

export interface IMapDispatchToAppProps {
    onGetWheather: TOnGetWheather;
}

export const mapDispatchToAppProps = (dispatch: ThunkDispatch<IAppState, void, Action>): IMapDispatchToAppProps =>
    ({
        onGetWheather: (city: string): void => {
            dispatch(fetchWheatherData(city));
        },
    });

// tslint:disable-next-line:variable-name
export const AppContainer = connect(mapStateToAppProps, mapDispatchToAppProps)(App);
