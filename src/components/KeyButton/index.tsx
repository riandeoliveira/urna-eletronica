import { useVotingMachine } from "hooks/useVotingMachine";
import type { ReactElement } from "react";
import styles from "./styles.module.scss";

interface KeyButtonProps {
  keyPress: string;
}

export const KeyButton = ({ keyPress }: KeyButtonProps): ReactElement => {
  const { onKeyButtonPress } = useVotingMachine();

  return (
    <button
      type="button"
      onClick={() => onKeyButtonPress(keyPress)}
      className={styles.button}
      data-test-id={`key-button-${keyPress}`}
    >
      {keyPress}
    </button>
  );
};
