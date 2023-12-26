import { observer } from "mobx-react-lite";
import type { ReactElement } from "react";
import { votingMachineStore } from "stores/voting-machine.store";
import styles from "./styles.module.scss";

export const ViceGovernor = observer((): ReactElement => {
  const { currentCandidate } = votingMachineStore;

  return (
    <div className={styles.vice_governor_area}>
      <span className={styles.label}>Vice-Governador:</span>
      <span className={styles.name}>{currentCandidate.vice.nome}</span>
    </div>
  );
});
