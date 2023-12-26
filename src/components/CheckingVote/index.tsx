import { observer } from "mobx-react-lite";
import type { ReactElement } from "react";
import { votingMachineStore } from "stores/voting-machine.store";
import styles from "./styles.module.scss";

export const CheckingVote = observer((): ReactElement => {
  const { stage, isBlankVote, isNullVote } = votingMachineStore;

  return (
    <span
      className={styles.label}
      data-position={stage.cargo.tipo === "senador" && !isBlankVote && !isNullVote}
    >
      CONFIRA O SEU VOTO
    </span>
  );
});
