import { candidatos } from "static";
import type { RootState } from "types/redux";

export const selectAllCandidates = () => candidatos;

export const selectCandidateByNumber = (state: RootState) => {
  const candidates = candidatos.filter(
    (candidato) => candidato.cargo === state.votingMachine.stage.cargo.tipo
  );

  return candidates.find(
    (candidate) => candidate.numero === state.votingMachine.keyInput.join("")
  );
};

export const selectCandidateParty = (state: RootState) => {
  const candidates = candidatos.filter(
    (candidato) => candidato.cargo === state.votingMachine.stage.cargo.tipo
  );

  return candidates.find(
    (candidate) =>
      candidate.partido.numero ===
      state.votingMachine.keyInput.join("").slice(0, 2)
  )?.partido;
};

export const selectVotingMachineStates = (state: RootState) => {
  return state.votingMachine;
};
