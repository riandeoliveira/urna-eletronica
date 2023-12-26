import { icons } from "assets";
import { Keyboard } from "components/Keyboard";
import { Screen } from "components/Screen";
import { useVotingMachine } from "hooks/useVotingMachine";
import { observer } from "mobx-react-lite";
import type { ReactElement } from "react";
import { useEffect } from "react";
import SVG from "react-inlinesvg";
import { votingMachineStore } from "stores/voting-machine.store";
import styles from "./styles.module.scss";

export const Home = observer((): ReactElement => {
  const { keyInput, stage } = votingMachineStore;

  const { handleVoting, handleVoteChecking } = useVotingMachine();

  useEffect(() => {
    handleVoting();

    if (keyInput.length === stage.campo_digitos.length) {
      handleVoteChecking();
    }
  }, [keyInput]);

  return (
    <div className={styles.home_area}>
      <SVG src={icons.votingMachineBox} />
      <div className={styles.voting_machine}>
        <Screen />
        <div className={styles.keyboard}>
          <SVG src={icons.votingMachineBrand} />
          <Keyboard />
        </div>
      </div>
    </div>
  );
});
