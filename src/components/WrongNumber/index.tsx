import { observer } from "mobx-react-lite";
import type { ReactElement } from "react";
import { votingMachineStore } from "stores/voting-machine.store";
import styles from "./styles.module.scss";

export const WrongNumber = observer((): ReactElement => {
  const { stage } = votingMachineStore;

  const isAvailableToPartyVote: boolean =
    stage.cargo.tipo === "deputado_federal" || stage.cargo.tipo === "deputado_estadual";

  return (
    <span
      className={styles.label}
      data-available-to-party-vote={isAvailableToPartyVote}
      data-test-id="wrong-number-label"
    >
      NÚMERO ERRADO
    </span>
  );
});
