import { VotingMachineActionTypes } from "./action-types";

export const setStage = (payload: number) => ({
  type: VotingMachineActionTypes.SET_STAGE,
  payload,
});

export const setKey = (payload: string) => ({
  type: VotingMachineActionTypes.SET_KEY,
  payload,
});
