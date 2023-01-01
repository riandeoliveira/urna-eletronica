import { combineReducers, createStore } from "redux";
import { votingMachineReducer } from "./voting-machine/reducer";

const rootReducer = combineReducers({
  votingMachine: votingMachineReducer,
});

export const store = createStore(rootReducer);
