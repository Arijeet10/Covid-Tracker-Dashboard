import {combineReducers} from "redux";
import { reducer } from "./reduxReducer";

const reducers=combineReducers({
    allData:reducer,
});

export default reducers;