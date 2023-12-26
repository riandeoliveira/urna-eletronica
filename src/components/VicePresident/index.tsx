import { observer } from "mobx-react-lite";
import type { ReactElement } from "react";
import { votingMachineStore } from "stores/voting-machine.store";
import styles from "./styles.module.scss";

export const VicePresident = observer((): ReactElement => {
  const { currentCandidate } = votingMachineStore;

  return (
    <div className={styles.vice_president_area}>
      <span className={styles.label}>Vice-Presidente:</span>
      <span className={styles.name}>{currentCandidate.vice.nome}</span>
    </div>
  );
});
