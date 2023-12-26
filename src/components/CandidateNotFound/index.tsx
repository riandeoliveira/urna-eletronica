import { observer } from "mobx-react-lite";
import type { ReactElement } from "react";
import { votingMachineStore } from "stores/voting-machine.store";
import styles from "./styles.module.scss";

export const CandidateNotFound = observer((): ReactElement => {
  const { keyInput, stage } = votingMachineStore;

  return (
    <>
      {keyInput.length === stage.campo_digitos.length && (
        <span className={styles.label}>CANDIDATO INEXISTENTE</span>
      )}
    </>
  );
});
