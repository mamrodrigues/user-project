import projectReducer from "./projectReducer";
import userReducer from "./userReducer";
import { combineReducers } from "redux";


const allReducers = combineReducers({
    projectState: projectReducer,
    userState: userReducer
})

export default allReducers;