import { observer } from "mobx-react-lite";
import type { ReactElement } from "react";
import { votingMachineStore } from "stores/voting-machine.store";
import styles from "./styles.module.scss";

export const CandidateJob = observer((): ReactElement => {
  const { stage, currentCandidate } = votingMachineStore;

  return (
    <span className={styles.label} data-job-position={stage.cargo.tipo}>
      {currentCandidate.sexo === "F" ? stage.cargo.nome_feminino : stage.cargo.nome_masculino}
    </span>
  );
});
