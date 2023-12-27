import { observer } from "mobx-react-lite";
import type { ReactElement } from "react";
import { votingMachineStore } from "stores/voting-machine.store";
import styles from "./styles.module.scss";

export const PartyVoteFooter = observer((): ReactElement => {
  const { isPartyVote, currentCandidate } = votingMachineStore;

  const isAvailableToPartyVote: boolean = isPartyVote && !currentCandidate.nome;

  return (
    <>
      {isAvailableToPartyVote && (
        <span className={styles.label} data-test-id="party-vote-secondary-label">
          (voto de legenda)
        </span>
      )}
    </>
  );
});
