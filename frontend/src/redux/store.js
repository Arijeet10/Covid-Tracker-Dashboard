import {createStore} from "redux";
import reducers from "./reducers/index";
import { composeWithDevTools } from "redux-devtools-extension";

const store=createStore(
    reducers,
    {},
    composeWithDevTools()
    // windows.__REDUX_DEVTOOLS_EXTENSION__&&windows.__REDUX_DEVTOOLS_EXTENSION__()
    );

export default store;