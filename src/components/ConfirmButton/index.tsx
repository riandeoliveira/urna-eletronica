import { useVotingMachine } from "hooks/useVotingMachine";
import type { ReactElement } from "react";
import styles from "./styles.module.scss";

export const ConfirmButton = (): ReactElement => {
  const { onConfirmButtonPress } = useVotingMachine();

  return (
    <button type="button" onClick={onConfirmButtonPress} className={styles.button}>
      CONFIRMA
    </button>
  );
};
