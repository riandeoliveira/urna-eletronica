import { observer } from "mobx-react-lite";
import type { ReactElement } from "react";
import { votingMachineStore } from "stores/voting-machine.store";
import { CandidateJob } from "../CandidateJob";
import { CandidateNumber } from "../CandidateNumber";
import { CandidateParty } from "../CandidateParty";
import { Footer } from "../Footer";
import { Header } from "../Header";
import styles from "./styles.module.scss";

export const PartyVoteStage = observer((): ReactElement => {
  const { keyInput, stage } = votingMachineStore;

  return (
    <>
      <Header />
      <CandidateJob />
      <CandidateNumber />
      {keyInput.length === stage.campo_digitos.length && (
        <span
          className={styles.not_found_candidate_label}
          data-test-id="non-existent-candidate-label"
        >
          CANDIDATO INEXISTENTE
        </span>
      )}
      <CandidateParty />
      {keyInput.length === stage.campo_digitos.length && (
        <span className={styles.party_vote_label} data-test-id="party-vote-primary-label">
          VOTO DE LEGENDA
        </span>
      )}
      <Footer />
    </>
  );
});
