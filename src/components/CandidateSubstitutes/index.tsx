import { observer } from "mobx-react-lite";
import type { ReactElement } from "react";
import { votingMachineStore } from "stores/voting-machine.store";
import styles from "./styles.module.scss";

export const CandidateSubstitutes = observer((): ReactElement => {
  const { currentCandidate } = votingMachineStore;

  return (
    <div className={styles.candidate_substitutes}>
      <div className={styles.label_container}>
        <span className={styles.label}>1º Suplente:</span>
        <span className={styles.name}>{currentCandidate.suplentes[0].nome}</span>
      </div>
      <div className={styles.label_container}>
        <span className={styles.label}>2º Suplente:</span>
        <span className={styles.name}>{currentCandidate.suplentes[1].nome}</span>
      </div>
    </div>
  );
});
