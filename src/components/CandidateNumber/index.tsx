import { observer } from "mobx-react-lite";
import type { ReactElement } from "react";
import { votingMachineStore } from "stores/voting-machine.store";
import styles from "./styles.module.scss";

export const CandidateNumber = observer((): ReactElement => {
  const { stage, isNullVote, isPartyVote, keyInput } = votingMachineStore;

  return (
    <>
      {isNullVote || isPartyVote || keyInput.length === stage.campo_digitos.length ? (
        <span className={styles.label} data-number-label-position={stage.cargo.tipo}>
          Número:
        </span>
      ) : (
        <></>
      )}
      <div className={styles.number_container} data-key-input-position={stage.cargo.tipo}>
        {stage.campo_digitos.map((_item, index) => (
          <div className={styles.number} data-is-same={index === keyInput.length} key={index}>
            {keyInput[index]}
          </div>
        ))}
      </div>
    </>
  );
});
