import etapas from "static/etapas/etapas.json";
import type { Candidato } from "types/candidato";
import type { Etapa } from "types/etapa";
import type { PayloadAction } from "types/redux";
import { VotingMachineActionTypes } from "./action-types";

interface VotingMachineState {
  currentCandidate: Candidato;
  isBlankVote: boolean;
  isCheckingVote: boolean;
  isFinishedVote: boolean;
  isNullVote: boolean;
  isPartyVote: boolean;
  keyInput: string[];
  stage: Etapa;
  stageIndex: number;
}

const initialState: VotingMachineState = {
  currentCandidate: {} as Candidato,
  isBlankVote: false,
  isCheckingVote: false,
  isFinishedVote: true,
  isNullVote: false,
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

    case VotingMachineActionTypes.SET_CURRENT_CANDIDATE:
      return {
        ...state,
        currentCandidate: action.payload,
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

    case VotingMachineActionTypes.SET_IS_FINISHED_VOTE:
      return {
        ...state,
        isFinishedVote: true,
      };

    case VotingMachineActionTypes.SET_IS_NULL_VOTE:
      return {
        ...state,
        isNullVote: action.payload,
      };

    case VotingMachineActionTypes.SET_IS_PARTY_VOTE:
      return {
        ...state,
        isPartyVote: action.payload,
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
        currentCandidate: {} as Candidato,
        isBlankVote: false,
        isCheckingVote: false,
        isNullVote: false,
        isPartyVote: false,
        keyInput: [],
        stage: etapas[state.stageIndex],
      };

    default:
      return state;
  }
};
