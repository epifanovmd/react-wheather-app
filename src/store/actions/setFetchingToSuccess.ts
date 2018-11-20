import { Action } from "redux";
import { IWheather } from "../../models/iWheather";

export interface ISetFetchingToSuccess extends Action {
    payload: { wheather: IWheather } | undefined;
}

export const SET_FETCHING_TO_SUCCESS = "SET_FETCHING_TO_SUCCESS";

export const setFetchingToSuccess = (wheath: IWheather): ISetFetchingToSuccess =>
    ({
        payload: { wheather: wheath },
        type: SET_FETCHING_TO_SUCCESS,
    });
