import { useVotingMachine } from "hooks/useVotingMachine";
import { type ReactElement } from "react";
import styles from "./styles.module.scss";

export const BlankButton = (): ReactElement => {
  const { onBlankButtonPress } = useVotingMachine();

  return (
    <button type="button" onClick={onBlankButtonPress} className={styles.button} data-test-id="blank-vote-button">
      BRANCO
    </button>
  );
};
