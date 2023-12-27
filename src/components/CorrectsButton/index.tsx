import { useVotingMachine } from "hooks/useVotingMachine";
import type { ReactElement } from "react";
import styles from "./styles.module.scss";

export const CorrectsButton = (): ReactElement => {
  const { onCorrectsButtonPress } = useVotingMachine();

  return (
    <button
      type="button"
      onClick={onCorrectsButtonPress}
      className={styles.button}
      data-test-id="correct-vote-button"
    >
      CORRIGE
    </button>
  );
};
