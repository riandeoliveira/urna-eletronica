import etapas from "static/etapas/etapas.json";
import type { Etapa } from "types/etapa";
import { VotingMachineActionTypes } from "./action-types";

interface VotingMachineState {
  keyInput: number[];
  stage: Etapa;
}

const initialState: VotingMachineState = {
  keyInput: [],
  stage: etapas[0],
};

export const votingMachineReducer = (
  state = initialState,
  action: any
): VotingMachineState => {
  switch (action.type) {
    case VotingMachineActionTypes.SET_STAGE:
      return {
        ...state,
        stage: etapas[action.payload],
      };

    case VotingMachineActionTypes.SET_KEY:
      return {
        ...state,
        keyInput: [...state.keyInput, action.payload],
      };

    default:
      return state;
  }
};
