interface IVotingMachineActionTypes {
  SET_IS_BLANK_VOTE: string;
  SET_IS_CHECKING_VOTE: string;
  SET_KEY_INPUT: string;
  SET_STAGE: string;
}

export const VotingMachineActionTypes: IVotingMachineActionTypes = {
  SET_IS_BLANK_VOTE: "votingMachine/setIsBlankVote",
  SET_IS_CHECKING_VOTE: "votingMachine/setIsCheckingVote",
  SET_KEY_INPUT: "votingMachine/setKeyInput",
  SET_STAGE: "votingMachine/setStage",
};
