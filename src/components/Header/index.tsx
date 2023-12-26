import type { ReactElement } from "react";
import styles from "./styles.module.scss";

export const Header = (): ReactElement => {
  return <span className={styles.label}>SEU VOTO PARA</span>;
};
