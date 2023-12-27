import type { ReactElement } from "react";
import styles from "./styles.module.scss";

export const BlankVote = (): ReactElement => {
  return (
    <span className={styles.label} data-test-id="blank-vote-label">
      VOTO EM BRANCO
    </span>
  );
};
