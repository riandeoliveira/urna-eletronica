import { candidatos } from "static";
import type { RootState } from "types/redux";

export const selectAllCandidates = () => candidatos;

export const selectCandidatesByStage = (state: RootState) => {
  return candidatos.filter(
    (candidato) => candidato.cargo === state.votingMachine.stage.cargo.tipo
  );
};

export const selectVotingMachineStates = (state: RootState) => {
  return state.votingMachine;
};
