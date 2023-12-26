import type { ReactElement } from "react";
import styles from "./styles.module.scss";

interface ProgressBarProps {
  progress: number;
}

export const ProgressBar = ({ progress }: ProgressBarProps): ReactElement => {
  return (
    <div className={styles.progress_bar_area}>
      <div className={styles.progress_bar} />
      <div className={styles.bar} style={{ width: `${progress}%` }} />
      <span className={styles.label}>Gravando</span>
    </div>
  );
};
