import type { ReactElement } from "react";
import { BlankButton } from "../BlankButton";
import { ConfirmButton } from "../ConfirmButton";
import { CorrectsButton } from "../CorrectsButton";
import { KeyButton } from "../KeyButton";
import styles from "./styles.module.scss";

export const Keyboard = (): ReactElement => {
  return (
    <div className={styles.keyboard}>
      <div className={styles.key_buttons}>
        <div className={styles.key_buttons_container}>
          <KeyButton keyPress="1" />
          <KeyButton keyPress="2" />
          <KeyButton keyPress="3" />
          <KeyButton keyPress="4" />
          <KeyButton keyPress="5" />
          <KeyButton keyPress="6" />
          <KeyButton keyPress="7" />
          <KeyButton keyPress="8" />
          <KeyButton keyPress="9" />
        </div>
        <div className={styles.key_buttons_last}>
          <KeyButton keyPress="0" />
        </div>
      </div>
      <div className={styles.special_buttons}>
        <BlankButton />
        <CorrectsButton />
        <ConfirmButton />
      </div>
    </div>
  );
};
