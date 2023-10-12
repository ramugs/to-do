import {combineReducers} from "redux";
import {findAllReducer} from "../reducers/finduserReducer";

const rootReducer = combineReducers({
  findAllReducer,
});

export default rootReducer;
