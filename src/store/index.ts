import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { reducers } from "./reducers";
import { IWheatherState } from "./reducers/wheatherReducer";

export interface IAppState {
    wheatherState: IWheatherState;
}

export const store = createStore(
  reducers,
  applyMiddleware(thunk),
);
