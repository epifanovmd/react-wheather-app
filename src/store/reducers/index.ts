import { combineReducers } from "redux";
import { IWheatherState, wheatherReducer } from "./wheatherReducer";

export interface IAppState {
    wheatherState: IWheatherState;
}

export const reducers = combineReducers({
  wheatherState: wheatherReducer,
});
