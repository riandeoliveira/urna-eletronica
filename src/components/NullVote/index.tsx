import { observer } from "mobx-react-lite";
import type { ReactElement } from "react";
import { votingMachineStore } from "stores/voting-machine.store";
import styles from "./styles.module.scss";

export const NullVote = observer((): ReactElement => {
  const { stage } = votingMachineStore;

  return (
    <span className={styles.label} data-position={stage.cargo.tipo === "senador"}>
      VOTO NULO
    </span>
  );
});
