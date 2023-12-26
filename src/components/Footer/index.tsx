import { observer } from "mobx-react-lite";
import type { ReactElement } from "react";
import { votingMachineStore } from "stores/voting-machine.store";
import { CheckingVote } from "../CheckingVote";
import { PartyVoteFooter } from "../PartyVoteFooter";
import styles from "./styles.module.scss";

export const Footer = observer((): ReactElement => {
  const { isCheckingVote } = votingMachineStore;

  return (
    <div className={styles.footer_area}>
      <div className={styles.footer}>
        {isCheckingVote ? (
          <CheckingVote />
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
