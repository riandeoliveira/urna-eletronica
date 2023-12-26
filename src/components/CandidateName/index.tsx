import { observer } from "mobx-react-lite";
import type { ReactElement } from "react";
import { votingMachineStore } from "stores/voting-machine.store";
import styles from "./styles.module.scss";

export const CandidateName = observer((): ReactElement => {
  const { stage, currentCandidate } = votingMachineStore;

  return (
    <div className={styles.candidate_name_area} data-name-position={stage.cargo.tipo}>
      <span className={styles.label}>Nome:</span>
      <div className={styles.name_container}>
        <span className={styles.name}>{currentCandidate.nome}</span>
      </div>
    </div>
  );
});
