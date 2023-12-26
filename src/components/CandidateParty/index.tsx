import { useVotingMachine } from "hooks/useVotingMachine";
import { observer } from "mobx-react-lite";
import type { ReactElement } from "react";
import { votingMachineStore } from "stores/voting-machine.store";
import styles from "./styles.module.scss";

export const CandidateParty = observer((): ReactElement => {
  const { stage } = votingMachineStore;

  const { getCandidateParty } = useVotingMachine();

  const isAvailableToPartyVote: boolean =
    stage.cargo.tipo === "deputado_federal" || stage.cargo.tipo === "deputado_estadual";

  return (
    <div
      className={styles.candidate_party_area}
      data-available-to-party-vote={isAvailableToPartyVote}
    >
      <span className={styles.label}>Partido:</span>
      <div className={styles.name_container}>
        <span className={styles.name}>{getCandidateParty()?.nome}</span>
      </div>
    </div>
  );
});
