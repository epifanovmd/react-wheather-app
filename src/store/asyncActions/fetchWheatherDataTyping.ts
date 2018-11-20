import { Action } from "redux";
import { setFetchingToSuccess } from "../actions/setFetchingToSuccess";
import { fetchWheather } from "../../requests/fetchWheather";
import { ThunkDispatch } from "redux-thunk";
import { IAppState } from "../index";

type TFetchWeatherDataResult = (dispatch: ThunkDispatch<IAppState, void, Action>) => void;

export type TFetchWeatherData = (city: string) => TFetchWeatherDataResult;

export const fetchWheatherData: TFetchWeatherData = (city: string) =>
  async (dispatch: ThunkDispatch<IAppState, void, Action>) => {
    try {
      const wheather = await fetchWheather(city);
      dispatch(setFetchingToSuccess(wheather));
    } catch (e) {
        throw (e);
      }
    };
