import { ISetFetchingToSuccess, SET_FETCHING_TO_SUCCESS } from "../actions/setFetchingToSuccess";
import { IWheather } from "../../models/iWheather";

export interface IWheatherState {
    wheather: IWheather | undefined;
}
type TWheatherAction = ISetFetchingToSuccess;

const initialWheatherState: IWheatherState = {
    wheather: undefined,
};

export const wheatherReducer = (state = initialWheatherState, action: TWheatherAction) => {
  switch (action.type) {
    case SET_FETCHING_TO_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};
