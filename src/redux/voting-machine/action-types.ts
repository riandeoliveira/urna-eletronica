interface IVotingMachineActionTypes {
  SET_STAGE: string;
  SET_KEY: string;
}

export const VotingMachineActionTypes: IVotingMachineActionTypes = {
  SET_STAGE: "votingMachine/nextStage",
  SET_KEY: "votingMachine/setKey",
};
