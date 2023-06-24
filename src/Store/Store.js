import { createStore } from "redux";
import { combineReducers } from "redux";
import {UserReducers} from "../Reducer/UserReducer"

export const store = createStore(UserReducers);