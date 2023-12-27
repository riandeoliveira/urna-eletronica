import { observer } from "mobx-react-lite";
import type { ReactElement } from "react";
import { votingMachineStore } from "stores/voting-machine.store";
import { PartyVoteFooter } from "../PartyVoteFooter";
import styles from "./styles.module.scss";

export const Footer = observer((): ReactElement => {
  const { isCheckingVote, stage, isBlankVote, isNullVote } = votingMachineStore;

  return (
    <div className={styles.footer_area}>
      <div className={styles.footer}>
        {isCheckingVote ? (
          <span
            className={styles.label}
            data-position={stage.cargo.tipo === "senador" && !isBlankVote && !isNullVote}
            data-test-id="check-vote-label"
          >
            CONFIRA O SEU VOTO
          </span>
        ) : (
          <>
            <span className={styles.first_label}>Aperte a tecla:</span>
            <span className={styles.second_label}>CONFIRMA para CONFIRMAR este voto</span>
            <span className={styles.third_label}>CORRIGE para REINICIAR este voto</span>
            <PartyVoteFooter />
          </>
        )}
      </div>
    </div>
  );
});
