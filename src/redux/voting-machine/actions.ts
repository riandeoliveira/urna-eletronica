import type { PayloadAction } from "types/redux";
import { VotingMachineActionTypes } from "./action-types";

export const clearKeyInput = (): PayloadAction<null> => ({
  type: VotingMachineActionTypes.CLEAR_KEY_INPUT,
});

export const setIsBlankVote = (
  payload: boolean
): PayloadAction<typeof payload> => ({
  type: VotingMachineActionTypes.SET_IS_BLANK_VOTE,
  payload,
});

export const setIsCheckingVote = (
  payload: boolean
): PayloadAction<typeof payload> => ({
  type: VotingMachineActionTypes.SET_IS_CHECKING_VOTE,
  payload,
});

export const setStage = (): PayloadAction<null> => ({
  type: VotingMachineActionTypes.SET_STAGE,
});

export const setKeyInput = (
  payload: string
): PayloadAction<typeof payload> => ({
  type: VotingMachineActionTypes.SET_KEY_INPUT,
  payload,
});
