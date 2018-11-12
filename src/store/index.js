

import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import reducers from "../reducers";
import logger from "redux-logger";



const store = createStore(reducers);


export default store;
