import etapas from "static/etapas/etapas.json";
import type { Candidato } from "types/candidato";
import type { Etapa } from "types/etapa";
import type { PayloadAction } from "types/redux";
import { VotingMachineActionTypes } from "./action-types";

interface VotingMachineState {
  currentCandidate: Candidato;
  isBlankVote: boolean;
  isCheckingVote: boolean;
  isPartyVote: boolean;
  keyInput: string[];
  stage: Etapa;
  stageIndex: number;
}

const initialState: VotingMachineState = {
  currentCandidate: {} as Candidato,
  isBlankVote: false,
  isCheckingVote: false,
  isPartyVote: false,
  keyInput: [],
  stage: etapas[0],
  stageIndex: 0,
};

export const votingMachineReducer = (
  state = initialState,
  action: PayloadAction<any>
): VotingMachineState => {
  switch (action.type) {
    case VotingMachineActionTypes.CLEAR_KEY_INPUT:
      return {
        ...state,
        keyInput: [],
      };

    case VotingMachineActionTypes.SET_IS_BLANK_VOTE:
      return {
        ...state,
        isBlankVote: action.payload,
      };

    case VotingMachineActionTypes.SET_IS_CHECKING_VOTE:
      return {
        ...state,
        isCheckingVote: action.payload,
      };

    case VotingMachineActionTypes.SET_KEY_INPUT:
      return {
        ...state,
        keyInput: [...state.keyInput, action.payload],
      };

    case VotingMachineActionTypes.SET_STAGE:
      state.stageIndex = state.stageIndex + 1;

      return {
        ...state,
        stage: etapas[state.stageIndex],
      };

    default:
      return state;
  }
};
