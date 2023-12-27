import { KeyButton } from "components/KeyButton";
import { numpadKeys } from "data/numpad-keys";
import { useVotingMachine } from "hooks/useVotingMachine";
import type { ReactElement } from "react";
import { v4 as uuid } from "uuid";
import styles from "./styles.module.scss";

export const Keyboard = (): ReactElement => {
  const { onBlankButtonPress, onCorrectsButtonPress, onConfirmButtonPress } = useVotingMachine();

  return (
    <div className={styles.keyboard_component}>
      <div className={styles.numpad}>
        <div className={styles.numpad_container}>
          {numpadKeys.map((value) => (
            <KeyButton keyPress={value} key={uuid()} />
          ))}
        </div>
        <div className={styles.numpad_bottom}>
          <KeyButton keyPress="0" />
        </div>
      </div>
      <div className={styles.special_buttons}>
        <button
          type="button"
          onClick={onBlankButtonPress}
          className={styles.blank_button}
          data-test-id="blank-vote-button"
        >
          BRANCO
        </button>
        <button
          type="button"
          onClick={onCorrectsButtonPress}
          className={styles.correct_button}
          data-test-id="correct-vote-button"
        >
          CORRIGE
        </button>
        <button
          type="button"
          onClick={onConfirmButtonPress}
          className={styles.confirm_button}
          data-test-id="confirm-vote-button"
        >
          CONFIRMA
        </button>
      </div>
    </div>
  );
};
