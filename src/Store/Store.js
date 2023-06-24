import { createStore } from "redux";
import { TalentReducer } from "../Reducer/TalentReducer";

export const store = createStore(TalentReducer);
